import React, { useState, useEffect } from 'react';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/zustand/useUserStore';
import MessageModal from '../MessageModal/MessageModal';
import { useMessageModalStore } from '@/zustand/useStore';
import pb from '@/api/pocketbase';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useUserStore(); // setUser 함수를 직접 구조분해 할당으로 추출

  const { isModalOpen, openModal, closeModal } = useMessageModalStore();

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      setUser({
        id: authData.record.id,
        userName: authData.record.username,
        email: email,
        profile: authData.record.profile,
        handle: authData.record.handle,
        isPrivate: authData.record.isPrivate,
        isProtect: authData.record.isProtect,
      });

      localStorage.setItem(
        'user',
        JSON.stringify({
          id: authData.record.id,
          userName: authData.record.username,
          email: email,
          profile: authData.record.profile,
          handle: authData.record.handle,
          isPrivate: authData.record.isPrivate,
          isProtect: authData.record.isProtect,
        }),
      );

      console.log(useUserStore.getState().user); // 상태 확인 방법
      console.log('Updating isFirstLogin for user ID:', authData.record.id);
      if (authData.record.isFirstLogin) {
        await pb.collection('users').update(authData.record.id, { isFirstLogin: false });
        navigate('/splash/setprofile');
      } else {
        navigate('/style');
      }
    } catch (error) {
      openModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto pt-4 rounded-lg bg-white">
      <EmailInput
        className="mb-[20px]"
        onValidationChange={(isValid, value) => {
          setIsEmailValid(isValid);
          setEmail(value);
        }}
      />
      <PasswordInput
        className="mb-[20px]"
        onValidationChange={(isValid, value) => {
          setIsPasswordValid(isValid);
          setPassword(value);
        }}
      />
      <Checkbox className="mb-[44px] mt-[14px]" />
      <SubmitButton isFormValid={isFormValid} />
      {isModalOpen && <MessageModal text={'유효하지 않은\n이메일 혹은 패스워드입니다.'} closeModal={closeModal} />}
    </form>
  );
}

export default LoginForm;
