import { FC, FormHTMLAttributes } from 'react';
import { Dialog as UiDialog } from '@headlessui/react';

import { Event } from '../../models';
import { Button } from '../Buttons';
import { InvisibleInput } from '../Forms';
import DatePicker from './DatePicker';

export interface DialogProps
  extends Partial<Pick<Event, 'title' | 'dateStart' | 'dateEnd'>>,
    FormHTMLAttributes<HTMLFormElement> {
  open: boolean;
  onClose: (value: boolean) => void;
  children?: never;
}

const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  dateStart,
  dateEnd,
  ...rest
}) => (
  <UiDialog
    open={open}
    onClose={onClose}
    className="flex items-center justify-center fixed z-10 inset-0 overflow-y-auto"
  >
    <UiDialog.Panel className="w-80 p-4 bg-gray-100 border border-gray-300 rounded shadow-xl">
      <form
        {...rest}
        method="post"
        action="/api/trackings/"
        onSubmit={onSubmit}
      >
        <InvisibleInput
          name="title"
          defaultValue={title}
          placeholder="New Event"
        />
        {dateStart && dateEnd && (
          <DatePicker
            dateStart={dateStart}
            dateEnd={dateEnd}
            className="mb-2"
          />
        )}
        <div className="flex">
          <Button type="submit">Save</Button>
          <Button view="inline" type="button" onClick={() => onClose(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </UiDialog.Panel>
  </UiDialog>
);

export default Dialog;
