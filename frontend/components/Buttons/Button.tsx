import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

const views = {
  primary: 'bg-blue-500 hover:bg-blue-400 text-white border border-blue-600 hover:border-blue-500 ',
  inline: 'text-slate-700 hover:text-blue-700',
};

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: keyof typeof views;
}

const Input: FC<InputProps> = ({
  view = 'primary',
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        'h-10 py-1.5 px-4 rounded focus:outline outline-1 outline-offset-1 outline-blue-500 duration-75',
        views[view],
        className,
      )}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Input;
