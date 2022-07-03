import { locale } from '../../helpers/locale';
import { Day } from '../../models';

export const isToday = (date: Date) => {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
};

export const setMonday = (date: Date) => {
  const day = date.getDay();
  date.setDate(date.getDate() - (day === 0 ? 6 : day - 1));
};

export const getDay = (date: Date): Day => {
  const day = date.getDate().toString();
  const weekday = date.getDay();
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });

  return {
    id: date.getTime(),
    title: day,
    weekend: weekday === 6 || weekday === 0,
    weekday: formatter.format(date),
    date: new Date(date.getTime()),
    today: isToday(date),
  };
};

/**
 * Mutates date object.
 */
export const getWeekDays = (date: Date): Day[] => {
  const matrix: number[] = Array(7).fill(0);

  return matrix.map(() => {
    const day = getDay(date);
    date.setDate(date.getDate() + 1);

    return day;
  });
};
