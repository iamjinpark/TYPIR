import React from 'react';
import Logo from '@/atoms/Logo/Logo';
import SignInSignUpLinks from '@/atoms/SignInSignUpLinks/SignInSignUpLinks';

const Splash = () => {
  return (
    <div
      className="min-w-[360px] max-w-[768px] h-screen flex flex-col items-center px-15 py-0 m-auto relative"
      style={{
        backgroundImage: "url('/images/splash_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full h-full">
        <div className="absolute top-[90px] left-[34px] md:top-[120px] md:left-[50px]">
          <Logo size="w-203pxr" color="white" />
          <div className="text-white mt-4 text-2xl">
            <p>Turn</p>
            <p>Your Pinterest</p>
            <p>Into</p>
            <p>Reality</p>
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center mx-15px">
          <SignInSignUpLinks text="로그인" />
          <SignInSignUpLinks text="회원가입" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
