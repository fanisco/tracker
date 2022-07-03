import { FC } from 'react';

import { Day } from '../../models';

import Headers from './Headers';

interface MonthHeadersProps {
  headers: Day[];
}

const MonthHeaders: FC<MonthHeadersProps> = ({ headers }) => {
  return (
    <Headers>{headers.map((header) => header.weekday)}</Headers>
  );
};

export default MonthHeaders;
