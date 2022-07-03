import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

const TodayEllipse: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <span
    className={clsx(
      'inline-flex items-center justify-center w-7 h-7 p-1 -m-2 rounded-full bg-rose-500 text-white',
      className,
    )}
  >
    {children}
  </span>
);

export default TodayEllipse;
