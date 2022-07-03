import type { Day, Entries, Event } from '../../models';

export const monthEventAdapter = (
  weeks: Day[][],
  events?: Event[],
): Entries[] =>
  weeks.map((week, i) => ({
    id: i,
    title: `Week ${i + 1}`,
    entries: week.map((day) => {
      return {
        ...day,
        events:
          events?.filter(
            (event) => event.dateStart.getDate() === day.date.getDate(),
          ) || [],
      };
    }),
  }));
