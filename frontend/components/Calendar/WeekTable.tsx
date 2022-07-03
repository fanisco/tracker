import { memo } from 'react';
import clsx from 'clsx';

import { Day, Hour } from '../../models';
import { Entries } from '../../models';
import { HourEvent } from '../Events';

interface WeekTableProps {
  days: Day[];
  hours: Hour[];
  data: Entries[];
}

const WeekTable = memo<WeekTableProps>(({ days, hours, data }) => {
  return (
    <div className="w-full h-full grid grid-cols-7 relative">
      {days.map((day) => (
        <div key={day.id}>
          {hours.map((hour) => (
            <div
              key={hour.id}
              className={clsx(
                'h-[8.3334%] px-4 py-1 border border-t-0 border-l-0 border-slate-200 text-right',
                day.weekend && 'bg-slate-50',
              )}
            ></div>
          ))}
        </div>
      ))}
      <div className="w-full h-full grid grid-cols-7 absolute top-0 left-0 pointer-events-none">
        {data.map((day) => (
          <div
            key={day.id}
            className="border border-l-0 border-t-0 border-transparent"
          >
            {day.entries.map((entry) => (
              <div key={entry.id} className="flex flex-col h-[8.3334%]">
                {entry.events.map((entry) => (
                  <HourEvent key={entry.id} {...entry} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default WeekTable;
