import React from 'react';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import LoginForm from '@/molecules/LoginForm/LoginForm';
import AccountActionLink from '@/atoms/AccountActionLink/AccountActionLink';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-650px">
      <div className="flex flex-col items-center bg-white py-4">
        <AccountPageTitle className="mt-[40px] mb-[56px]" />
        <LoginForm />
        <AccountActionLink />
      </div>
    </div>
  );
};

export default SignIn;
