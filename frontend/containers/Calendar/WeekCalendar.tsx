import { FC, useMemo } from 'react';

import {
  Cursor,
  Layout,
  Ruler,
  WeekHeaders,
  WeekTable,
} from '../../components/Calendar';
import {
  selectWeekDays,
  selectDayHours,
  selectWeekModeDays,
} from '../../store/features/calendarSlice';
import { useAppSelector } from '../../store/hooks';
import { Controller } from '../Events';

import { CalendarModeProps } from './CalendarMode';
import { weekEventAdapter } from './WeekCalendar.helpers';

export interface WeekProps extends CalendarModeProps {}

const Week: FC<WeekProps> = ({ events, ...rest }) => {
  const weekDays = useAppSelector(selectWeekDays);
  const weekModeDays = useAppSelector(selectWeekModeDays);
  const dayHours = useAppSelector(selectDayHours);
  const data = useMemo(
    () => weekEventAdapter(weekModeDays, dayHours, events),
    [events, weekModeDays, dayHours],
  );

  return (
    <Layout
      {...rest}
      headers={<WeekHeaders headers={weekDays} />}
      side={<Ruler values={dayHours} />}
    >
      <Controller>
        {(onEventCreate, onEventContextMenu) => (
          <WeekTable
            days={weekModeDays}
            hours={dayHours}
            data={data}
            onEventCreate={onEventCreate}
            onEventContextMenu={onEventContextMenu}
          />
        )}
      </Controller>
      <Cursor />
    </Layout>
  );
};

export default Week;
