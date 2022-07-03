import { FC } from 'react';

import { NavigatorButton } from '../../components/Calendar';
import {
  setCurrentDate,
  setPrevWeek,
  setNextWeek,
} from '../../store/features/calendarSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CalendarModes } from '../../types/calendar';

interface NavigationProps {
  children?: never;
}

const Navigation: FC<NavigationProps> = () => {
  const mode = useAppSelector((state) => state.calendar.mode);
  const dispatch = useAppDispatch();
  const onPrevClick = () => {
    if (mode === CalendarModes.Week) {
      dispatch(setPrevWeek());
    }
  };
  const onNextClick = () => {
    if (mode === CalendarModes.Week) {
      dispatch(setNextWeek());
    }
  };

  return (
    <div>
      <NavigatorButton onClick={onPrevClick}>{'<'}</NavigatorButton>
      <NavigatorButton
        className="ml-[1px]"
        onClick={() => dispatch(setCurrentDate())}
      >
        Today
      </NavigatorButton>
      <NavigatorButton className="ml-[1px]" onClick={onNextClick}>
        {'>'}
      </NavigatorButton>
    </div>
  );
};

export default Navigation;
