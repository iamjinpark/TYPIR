import React from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

function LoginForm() {
  return (
    <form action="" className="space-y-4">
      <EmailInput className={'mb-[16px]'} />
      <PasswordInput className={'mb-[16px]'} />
      <Checkbox className={'mb-[44px] mt-[16px]'} />
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
