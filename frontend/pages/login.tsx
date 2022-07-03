import type { NextPage } from 'next';

import { Auth } from '../containers/Auth';

const Login: NextPage = () => {
  return (
    <div className="w-full h-full p-4 flex justify-center items-center bg-zinc-200">
      <Auth className="w-96 p-4 bg-white rounded-lg shadow-xl" />
    </div>
  );
};

export default Login;
