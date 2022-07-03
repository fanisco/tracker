import { FC, Children } from 'react';

interface HeadersProps {
  align?: 'left' | 'center' | 'right';
}

const Headers: FC<HeadersProps> = ({ children, align = 'right' }) => {
  return (
    <div className="w-full grid grid-cols-7 bg-white">
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className={`flex px-3 py-1 border-b border-b-slate-200 border-r border-transparent justify-${align}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Headers;
