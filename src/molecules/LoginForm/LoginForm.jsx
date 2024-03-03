import React, { useState, useEffect } from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import PocketBase from 'pocketbase';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // 포켓베이스 클라이언트 인스턴스 생성
  const pb = new PocketBase('https://pocket10.kro.kr');

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) {
      alert('이메일 또는 비밀번호가 유효하지 않습니다.');
      return;
    }
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      alert('로그인 성공: ' + authData.username);
      // 로그인 성공 후 처리, 예: 페이지 리다이렉션
    } catch (error) {
      alert('로그인 실패: ' + error.message);
      // 로그인 실패 처리
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
