import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Auth as AuthComponent, AuthProps as AuthComponentProps } from '../../components/Auth';
import { useForm } from '../../hooks';
import { useLoginMutation } from '../../store/services/AuthService';

interface LoginInput {
  email: string;
  password: string;
}

interface AuthProps extends AuthComponentProps {
  forwardUrl?: string;
}

const Auth: FC<AuthProps> = ({ forwardUrl = '/', ...rest }) => {
  const router = useRouter();
  const [login, { isSuccess }] = useLoginMutation();
  const onSubmit = (input: LoginInput) => {
    console.log(input, login(input));
  };
  const handleSubmit = useForm(['email', 'password']);

  useEffect(() => {
    if (isSuccess) {
      router.push(forwardUrl);
    }
  }, [isSuccess, forwardUrl]);

  return (
    <AuthComponent
      {...rest}
      method="post"
      action="/api/auth/login/"
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default Auth;
