import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

const sizes = {
  XL: 'h-6 text-xl',
};

interface InvisibleInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: keyof typeof sizes;
}

const InvisibleInput: FC<InvisibleInputProps> = ({
  className,
  size = 'XL',
  ...rest
}) => {
  return (
    <input
      {...rest}
      className={clsx(
        'w-full mb-2 p-0 bg-transparent rounded-none border border-none outline-none',
        sizes[size],
        className,
      )}
    />
  );
};

export default InvisibleInput;
