import React, { useState } from 'react';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import ModifyProfileImg from '@/atoms/ModifyProfileImg/ModifyProfileImg';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';

function SetInitialProfile() {
  const [nickname, setNickname] = useState('');
  const [handle, setHandle] = useState('');

  const isNameValid = /^[a-zA-Z]+$/.test(nickname) && nickname.length >= 3 && nickname.length <= 16;
  const isHandleValid = /^[a-zA-Z]+$/.test(handle) && handle.length >= 3 && handle.length <= 16;

  return (
    <div className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      <AccountPageTitle text={'프로필 설정'} className={'mt-75px mb-18px'} />
      <ModifyProfileImg />
      <div className="mb-1">
        <CommonInput
          text="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="커뮤니티에서 사용할 닉네임"
        />
        <div className="text-red-500 text-xs h-1">
          {!isNameValid && nickname.length > 0 && '3글자 이상, 16글자 이하의 영문이어야 합니다.'}
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
      <SubmitButton isFormValid={isNameValid && isHandleValid} text="설정" width="w-36" className={'mt-30px'} />
    </div>
  );
}

export default SetInitialProfile;
