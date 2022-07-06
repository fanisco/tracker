import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Event } from '../../models';
import { locale } from '../../helpers/locale';

interface HourEventProps
  extends Event,
    Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> {}

const HourEvent: FC<HourEventProps> = ({
  id,
  dateStart,
  title,
  length,
  offset,
  ...rest
}) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      {...rest}
      id={`tracking-${id}`}
      className={clsx(
        'p-1 relative leading-tight bg-pink-500 hover:bg-pink-600 rounded text-sm text-white shadow-lg pointer-events-auto cursor-pointer select-none',
      )}
      style={{ top: `${offset * 100}%`, flex: `1 0 ${length * 100}%` }}
    >
      <time className="block">{formatter.format(dateStart)}</time>
      <span className="font-bold">{title}</span>
    </div>
  );
};

export default HourEvent;
