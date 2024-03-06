import React, { useState, useEffect } from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/zustand/useUserStore';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useUserStore(); // setUser 함수를 직접 구조분해 할당으로 추출

  const pb = new PocketBase('https://pocket10.kro.kr');

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      setUser({
        userName: authData.record.username,
        email: email,
        profile: authData.record.profile,
        handle: authData.record.handle,
        isPrivate: authData.record.isPrivate,
        isProtect: authData.record.isProtect,
      });
      console.log(useUserStore.getState().user); // 상태 확인 방법
      alert('로그인 성공: ' + authData.record.isFirstLogin);
      console.log(authData);
      if (authData.record.isFirstLogin) {
        // isFirstLogin을 false로 바꾸는 코드 추가
        navigate('/splash/setprofile');
      } else {
        navigate('/style');
      }
    } catch (error) {
      alert('유효하지 않은 이메일 혹은 패스워드입니다.' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto p-4 rounded-lg bg-white">
      <EmailInput
        className="mb-[16px]"
        onValidationChange={(isValid, value) => {
          setIsEmailValid(isValid);
          setEmail(value);
        }}
      />
      <PasswordInput
        className="mb-[16px]"
        onValidationChange={(isValid, value) => {
          setIsPasswordValid(isValid);
          setPassword(value);
        }}
      />
      <Checkbox className="mb-[44px] mt-[16px]" />
      <SubmitButton isFormValid={isFormValid} />
    </form>
  );
}

export default LoginForm;
