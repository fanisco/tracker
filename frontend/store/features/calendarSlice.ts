import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Day } from '../../models';
import { locale } from '../../helpers/locale';
import type { RootState } from '../store';
import { CalendarMode, CalendarModes } from '../../types/calendar';

import { getDay, getWeekDays, setMonday } from './calendarSlice.helpers';

interface CalendarState {
  date: Date;
  mode: CalendarMode;
}

const initialState: CalendarState = {
  date: new Date(),
  mode: CalendarModes.Week,
};

const calendarSlice = createSlice({
  initialState,
  name: 'calendarSlice',
  reducers: {
    setMode: (state, action: PayloadAction<CalendarMode>) => {
      return { ...state, mode: action.payload };
    },
    setCurrentDate: (state) => {
      const now = new Date();
      const date = new Date(state.date);
      date.setFullYear(now.getFullYear());
      date.setMonth(now.getMonth());
      date.setDate(now.getDate());
      return { ...state, date };
    },
    setPrevWeek: (state) => {
      const date = new Date(state.date);
      date.setDate(date.getDate() - 7);
      return { ...state, date };
    },
    setNextWeek: (state) => {
      const date = new Date(state.date);
      date.setDate(date.getDate() + 7);
      return { ...state, date };
    },
  },
});

export const { setMode, setCurrentDate, setPrevWeek, setNextWeek } =
  calendarSlice.actions;
export default calendarSlice.reducer;

export const selectCurrentMonth = ({ calendar }: RootState) => {
  const date = new Date(calendar.date);
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });

  return {
    id: date.getTime(),
    title: formatter.format(date),
    year: date.getFullYear().toString(),
    date,
  };
};

/**
 * Formatted week days and dates of current week.
 */
export const selectWeekDays = ({ calendar }: RootState) => {
  const date = new Date(calendar.date);
  setMonday(date);

  return Array(7)
    .fill(0)
    .map((_) => {
      const day = getDay(date);
      date.setDate(date.getDate() + 1);
      return day;
    });
};

export const selectDayHours = ({ calendar }: RootState) => {
  const date = new Date(calendar.date);
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return Array(24)
    .fill(0)
    .map((_, i) => {
      date.setHours(i);

      return {
        id: date.getTime(),
        title: formatter.format(date),
        date: new Date(date.getTime()),
      };
    });
};

export const selectWeekModeDays = ({ calendar }: RootState) => {
  const date = new Date(calendar.date);
  setMonday(date);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return getWeekDays(date);
};

export const selectMonthModeDays = ({ calendar }: RootState): Day[][] => {
  const date = new Date(calendar.date);
  const matrix = Array<number>(6).fill(0);
  date.setDate(1);

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }

  return matrix.map(() => getWeekDays(date));
};
