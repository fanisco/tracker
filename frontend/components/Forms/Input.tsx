import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={clsx(
        'h-10 mb-2 p-2 bg-white rounded border border-slate-300 focus:outline outline-1 outline-offset-1 outline-blue-500',
        className,
      )}
    />
  );
};

export default Input;
