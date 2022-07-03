import { memo } from 'react';
import clsx from 'clsx';

import { Entries } from '../../models';
import { DayEvent } from '../Events';

import TodayEllipse from './TodayEllipse';

interface MonthTableProps {
  data: Entries[];
}

const MonthTable = memo<MonthTableProps>(({ data }) => {
  return (
    <div className="w-full h-full grid grid-cols-7 grid-rows-6 relative">
      {data.map((week) =>
        week.entries.map((entry) => (
          <div
            key={entry.id}
            className={clsx(
              'flex flex-col p-3 border border-t-0 border-l-0 border-slate-200',
              entry.weekend && 'bg-slate-50',
            )}
          >
            {entry.today ? (
              <TodayEllipse className="ml-auto">{entry.title}</TodayEllipse>
            ) : (
              <span className="ml-auto">{entry.title}</span>
            )}
            {entry.events.map((event) => (
              <DayEvent {...event} key={entry.id} className="mt-0.5" />
            ))}
          </div>
        )),
      )}
    </div>
  );
});

export default MonthTable;
