import React from 'react';
import Logo from '@/atoms/Logo/Logo';
import SignInSignUpLinks from '@/atoms/SignInSignUpLinks/SignInSignUpLinks';

const Splash = () => {
  return (
    <div
      className="w-[320px] h-[650px] flex flex-col items-center px-15 py-0 m-auto relative"
      style={{
        backgroundImage: "url('/public/images/splash_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      <div className="relative z-10 w-full h-full">
        <div className="absolute top-[90px] left-[34px]">
          <Logo size="w-203px" color="white" />
          <div className="text-white mt-4 text-2xl">
            <p>Turn</p>
            <p>Your Pinterest</p>
            <p>Into</p>
            <p>Reality</p>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center">
          <SignInSignUpLinks text="로그인" />
          <div className="mt-3">
            <SignInSignUpLinks text="회원가입" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
