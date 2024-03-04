import React from 'react';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import SocialLogin from '@/atoms/SocialLogin/SocialLogin';
import LoginForm from '@/molecules/LoginForm/LoginForm';
import AccountActionLink from '@/atoms/AccountActionLink/AccountActionLink';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-650px">
      <div className="flex flex-col items-center bg-white py-4">
        <AccountPageTitle className="mt-[75px] mb-[56px]" />
        <LoginForm />
        <AccountActionLink />
        <SocialLogin className="mt-[58px]" />
      </div>
    </div>
  );
};

export default SignIn;
