import { FC } from 'react';

import { useError } from '../../hooks';
import { useAppSelector } from '../../store/hooks';
import { useGetAllQuery } from '../../store';
import { CalendarMode, CalendarModes } from '../../types/calendar';

import ModeSwitcher from './ModeSwitcher';
import MonthCalendar from './MonthCalendar';
import Navigation from './Navigation';
import Title from './Title';
import WeekCalendar from './WeekCalendar';

interface MainProps {}

const calendarModes: Record<
  CalendarMode,
  typeof WeekCalendar | typeof MonthCalendar | Function
> = {
  [CalendarModes.Day]: () => null,
  [CalendarModes.Week]: WeekCalendar,
  [CalendarModes.Month]: MonthCalendar,
  [CalendarModes.Year]: () => null,
};

const Calendar: FC<MainProps> = () => {
  const activeMode = useAppSelector((state) => state.calendar.mode);
  const { data: events, error } = useGetAllQuery();
  const CalendarMode = calendarModes[activeMode];

  useError(error);

  return (
    <CalendarMode
      events={events}
      modes={<ModeSwitcher />}
      heading={<Title />}
      navigation={<Navigation />}
    />
  );
};

export default Calendar;
