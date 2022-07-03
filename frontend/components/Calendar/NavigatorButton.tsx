import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface NavigatorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const NavigatorButton: FC<NavigatorButtonProps> = ({ className, ...rest }) => (
  <button
    {...rest}
    className={clsx(
      'px-1 leading-5 text-sm border border-gray-200 bg-white hover:bg-slate-100 rounded shadow-sm',
      className,
    )}
  />
);

export default NavigatorButton;
