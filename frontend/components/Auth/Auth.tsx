import clsx from 'clsx';
import { FC, FormHTMLAttributes } from 'react';

import { Button } from '../Buttons';
import { Input } from '../Forms';

export interface AuthProps extends FormHTMLAttributes<HTMLFormElement> {}

const Auth: FC<AuthProps> = ({ className, ...rest }) => {
  return (
    <form
      {...rest}
      className={clsx(
        'flex flex-col',
        className,
      )}
    >
      <Input name="email" placeholder="Email" type="email" />
      <Input name="password" placeholder="Password" type="password" />
      <Button>Login</Button>
    </form>
  );
};

export default Auth;
