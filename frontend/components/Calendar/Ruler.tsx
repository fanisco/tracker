import { FC } from 'react';

import { Value } from '../../types/common';

interface RulerProps {
  values: Value[];
}

const Ruler: FC<RulerProps> = ({ values }) => {
  return (
    <aside className="w-16">
      {values.map((value) => (
        <div
          key={value.id}
          className="flex items-start h-[8.3334%] px-3 border-r border-b border-transparent text-right snap-start"
        >
          <span className="-mt-[3px] text-xs text-slate-400">{value.title}</span>
        </div>
      ))}
    </aside>
  );
};

export default Ruler;
