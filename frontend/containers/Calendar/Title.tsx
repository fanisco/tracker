import { FC } from 'react';

import { selectCurrentMonth } from '../../store/features/calendarSlice';
import { useAppSelector } from '../../store/hooks';

const Title: FC<{ children?: never }> = ({}) => {
  const currentMonth = useAppSelector(selectCurrentMonth);

  return (
    <h2 className="my-2 text-3xl font-bold">
      {currentMonth.title} <span className="font-normal">{currentMonth.year}</span>
    </h2>
  );
};

export default Title;
