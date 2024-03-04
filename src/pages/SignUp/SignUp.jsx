import React, { useState, useEffect } from 'react';
import AccountActionLink from '@/atoms/AccountActionLink/AccountActionLink';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import Checkbox from '@/atoms/Checkbox/Checkbox';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  // 패스워드 확인 유효성을 별도로 상태로 관리할 필요가 없으므로 제거합니다.
  const [isFormValid, setIsFormValid] = useState(false);

  // 폼 유효성 검사: 이메일, 패스워드 유효성 검사 및 패스워드 일치 여부
  useEffect(() => {
    const passwordsMatch = password === confirmPassword && confirmPassword !== ''; // 패스워드 일치 및 비어있지 않음을 확인
    setIsFormValid(emailValid && passwordValid && passwordsMatch);
  }, [emailValid, passwordValid, password, confirmPassword]);

  return (
    <div className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      <AccountPageTitle text="회원가입" className="mt-75px mb-43px" />
      <form action="" className="w-full flex flex-col items-center">
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} onValidationChange={setEmailValid} />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onValidationChange={setPasswordValid}
          className="mt-18px"
        />
        <PasswordInput
          text="패스워드 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-18px"
        />
        <Checkbox text="이용약관에 동의합니다" className={'mt-16px w-full px-20px'} />
        <SubmitButton isFormValid={isFormValid} text="회원가입" className="mt-31px" />
      </form>
      <AccountActionLink text="로그인" />
    </div>
  );
};

export default SignUp;
