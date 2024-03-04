import React, { useState, useEffect } from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const pb = new PocketBase('https://pocket10.kro.kr');

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      alert('로그인 성공: ' + authData.Username);
      navigate('/category');
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
