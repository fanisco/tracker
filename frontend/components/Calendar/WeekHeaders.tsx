import { FC } from 'react';

import { Day } from '../../models';

import Headers from './Headers';
import TodayEllipse from './TodayEllipse';

interface WeekHeadersProps {
  headers: Day[];
}

const WeekHeaders: FC<WeekHeadersProps> = ({ headers }) => {
  return (
    <Headers align="center">
      {headers.map((header) => (
        <div key={header.id} className="flex items-center">
          {header.weekday}{' '}
          {header.today ? (
            <TodayEllipse className="ml-2">{header.title}</TodayEllipse>
          ) : (
            header.title
          )}
        </div>
      ))}
    </Headers>
  );
};

export default WeekHeaders;
