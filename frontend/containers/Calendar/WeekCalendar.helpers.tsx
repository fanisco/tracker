import type { Day, Entries, Hour, Event } from '../../models';

export const weekEventAdapter = (
  days: Day[],
  hours: Hour[],
  events?: Event[],
): Entries[] =>
  days.map((day) => {
    return {
      ...day,
      entries: hours.map((hour) => ({
        ...hour,
        events:
          events?.filter(
            (event) =>
              event.dateStart.getDate() === day.date.getDate() &&
              event.dateStart.getHours() === hour.date.getHours(),
          ) || [],
      })),
    };
  });
