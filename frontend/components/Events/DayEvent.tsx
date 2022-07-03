import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Event } from '../../models';

interface DayEventProps extends Event, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> {}

const DayEvent: FC<DayEventProps> = ({ title, className }) => {
  return (
    <div
      className={clsx(
        'py-0.5 px-1 relative leading-tight border border-pink-200 bg-pink-100 hover:bg-pink-200 rounded text-xs text-black shadow-sm pointer-events-auto cursor-pointer select-none',
        className,
      )}
    >
      {title}
    </div>
  );
};

export default DayEvent;
