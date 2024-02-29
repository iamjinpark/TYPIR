import React from 'react';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import SocialLogin from '@/atoms/SocialLogin/SocialLogin';
import LoginForm from '@/molecules/LoginForm/LoginForm';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-[320px] h-[650px] flex flex-col items-center bg-white py-4"
        style={{ transform: 'translateY(-50%)', marginTop: '50vh' }}
      >
        <AccountPageTitle className={'mt-[75px] mb-[56px]'} />
        <LoginForm />
        <SocialLogin className={'mt-[58px]'} />
      </div>
    </div>
  );
};

export default SignIn;
