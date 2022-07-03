import { FC } from 'react';
import clsx from 'clsx';

import { CalendarModes } from '../../types/calendar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setMode } from '../../store/features/calendarSlice';

export interface ModeSwitcherProps {
  children?: never;
}

const modes = [
  CalendarModes.Day,
  CalendarModes.Week,
  CalendarModes.Month,
  CalendarModes.Year,
];

const ModeSwitcher: FC<ModeSwitcherProps> = () => {
  const activeMode = useAppSelector((state) => state.calendar.mode);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center p-1 text-sm">
      <ul className="flex border border-slate-200 rounded">
        {modes.map((mode) => (
          <li
            key={mode}
            className={clsx(
              'leading-normal px-4 rounded cursor-pointer',
              mode === activeMode && 'bg-slate-100',
            )}
            onClick={() => dispatch(setMode(mode))}
          >
            {mode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModeSwitcher;
