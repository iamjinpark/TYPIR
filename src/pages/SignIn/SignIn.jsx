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
        <div className=" mt-20">
          {' '}
          {/* 75px에서 Tailwind CSS 기본 단위로 가장 가까운 값 사용 */}
          <AccountPageTitle />
        </div>
        <div className="mt-14">
          {' '}
          {/* 58px에서 Tailwind CSS 기본 단위로 가장 가까운 값 사용 */}
          <LoginForm />
        </div>
        <div className="mt-14">
          {' '}
          {/* LoginForm 아래 58px 간격 */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
