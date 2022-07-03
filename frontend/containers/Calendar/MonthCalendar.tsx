import { FC, useMemo } from 'react';

import { Layout, MonthHeaders, MonthTable } from '../../components/Calendar';
import { useAppSelector } from '../../store/hooks';
import {
  selectMonthModeDays,
  selectWeekDays,
} from '../../store/features/calendarSlice';

import { CalendarModeProps } from './CalendarMode';
import { monthEventAdapter } from './MonthCalendar.helpers';

export interface MonthProps extends CalendarModeProps {}

const Month: FC<MonthProps> = ({ events, ...rest }) => {
  const monthModeDays = useAppSelector(selectMonthModeDays);
  const weekDays = useAppSelector(selectWeekDays);
  const data = useMemo(
    () => monthEventAdapter(monthModeDays, events),
    [events, monthModeDays],
  );

  return (
    <Layout {...rest} headers={<MonthHeaders headers={weekDays} />}>
      <MonthTable data={data} />
    </Layout>
  );
};

export default Month;
