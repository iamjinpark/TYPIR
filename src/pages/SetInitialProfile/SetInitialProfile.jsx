import React, { useState } from 'react';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import ModifyProfileImg from '@/atoms/ModifyProfileImg/ModifyProfileImg';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import { useUserStore } from '@/zustand/useUserStore';
import { useNavigate } from 'react-router-dom';
import pb from '@/api/pocketbase';

function SetInitialProfile() {
  const [username, setUsername] = useState('');
  const [handle, setHandle] = useState('');
  const { image, preview, setImage, setPreview } = useUserStore();
  const { updateUser } = useUserStore();

  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  // const updatedUser = { ...storedUser, username, handle, preview };

  const isNameValid = /^[a-zA-Z]+$/.test(username) && username.length >= 3 && username.length <= 16;
  const isHandleValid = /^[a-zA-Z]+$/.test(handle) && handle.length >= 3 && handle.length <= 16;

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  console.log(userId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blob = await fetch(preview).then((res) => res.blob());
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

    const userData = {
      ...storedUser,
      username: username,
      handle: handle,
      profile: file,
    };

    try {
      await pb.collection('users').update(userId, userData);
      updateUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('데이터 저장 완료');
      navigate('/style');
    } catch (error) {
      console.error('데이터 저장 실패:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      <AccountPageTitle text={'프로필 설정'} className={'mt-130px mb-30px'} />
      <ModifyProfileImg image={image} setImage={setImage} preview={preview} setPreview={setPreview} />
      <div className="mb-2">
        <CommonInput
          text="닉네임"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="커뮤니티에서 사용할 닉네임"
        />
        <div className="text-red-500 text-xs h-1">
          {!isNameValid && username.length > 0 && '3글자 이상, 16글자 이하의 영문이어야 합니다.'}
        </div>
      </div>
      <div className="mb-2">
        <CommonInput
          text="핸들"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="개인페이지 ID"
        />
        <div className="text-red-500 text-xs h-1">
          {!isHandleValid && handle.length > 0 && '3글자 이상, 16글자 이하의 영문이어야 합니다.'}
        </div>
      </div>
      <SubmitButton isFormValid={isNameValid && isHandleValid} text="설정" width="w-36" className={'mt-[50px]'} />
    </form>
  );
}

export default SetInitialProfile;
