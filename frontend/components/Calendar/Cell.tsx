import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface CellProps extends HTMLAttributes<HTMLDivElement> {
  weekend?: boolean;
}

const Cell: FC<CellProps> = ({ weekend, ...rest }) => (
  <div
    {...rest}
    className={clsx(
      'h-[8.3334%] px-4 py-1 border border-t-0 border-l-0 border-slate-200 text-right',
      weekend && 'bg-slate-50',
    )}
  />
);

export default Cell;
