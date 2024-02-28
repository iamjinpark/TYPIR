import React from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

function LoginForm() {
  return (
    <form action="" className="space-y-4">
      <div className="mb-4">
        {' '}
        {/* EmailInput 아래 16px */}
        <EmailInput />
      </div>
      <div className="mb-14">
        {' '}
        {/* PasswordInput 아래 16px */}
        <PasswordInput />
      </div>
      <div className="mb-15">
        {' '}
        {/* Checkbox에서 44px 아래 */}
        <Checkbox />
      </div>
      {/* SubmitButton */}
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
