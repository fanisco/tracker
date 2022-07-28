import { FC, ReactNode, useCallback, useState } from 'react';

import { Dialog } from '../../components/Event';
import type { OnEventCreate, OnEventContextMenu } from '../../components/Event';
import type { Event, EventDto } from '../../models';
import { useForm } from '../../hooks';
import {
  eventsApi,
  useCreateEventMutation,
  useDeleteEventMutation,
} from '../../store';
import { useAppDispatch } from '../../store/hooks';

interface ControllerProps {
  children: (
    onCreateEvent: OnEventCreate,
    onEventContextMenu: OnEventContextMenu,
  ) => ReactNode;
}

const Controller: FC<ControllerProps> = ({ children }) => {
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [eventModel, setEventModel] = useState<Partial<Event>>({});

  const dispatch = useAppDispatch();

  const [createEvent] = useCreateEventMutation();
  const onFormSubmit = async ({ title, ...rest }: EventDto) => {
    const input = { title: title || 'New Event', ...rest };
    await createEvent(input);
    setIsEventDialogOpen(false);
  };
  const handleFormSubmit = useForm(['title', 'dateStart', 'dateEnd']);

  const onCreateEvent = useCallback((dateStart: Date) => {
    const dateEnd = new Date(dateStart);
    dateEnd.setHours(dateStart.getHours() + 1);
    const newEvent = {
      title: '',
      dateStart,
      dateEnd,
    };

    dispatch(
      eventsApi.util.updateQueryData(
        'getAll',
        undefined,
        (draftEvents) => {
          // @ts-ignore - FixMe
          draftEvents.push(newEvent);
        },
      ),
    );

    setIsEventDialogOpen(true);
    setEventModel(newEvent);
  }, []);

  const [deleteEvent] = useDeleteEventMutation();
  const onEventContextMenu = useCallback(({ id }: Event) => {
    deleteEvent({ id });
  }, []);

  return (
    <>
      <Dialog
        open={isEventDialogOpen}
        onClose={(value) => setIsEventDialogOpen(value)}
        onSubmit={handleFormSubmit(onFormSubmit)}
        title={eventModel.title}
        dateStart={eventModel.dateStart}
        dateEnd={eventModel.dateEnd}
      />
      {children(onCreateEvent, onEventContextMenu)}
    </>
  );
};

export default Controller;
