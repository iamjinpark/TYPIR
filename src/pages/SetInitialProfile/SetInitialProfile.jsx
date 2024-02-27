import React, { useState } from 'react';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import ModifyProfileImg from '@/atoms/ModifyProfileImg/ModifyProfileImg';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

function SetInitialProfile() {
  const [nickname, setNickname] = useState('');
  const [handle, setHandle] = useState('');

  // 닉네임과 핸들의 유효성 검사
  const isNicknameValid = nickname.length >= 1 && nickname.length <= 10;
  const isHandleValid = handle.length >= 1 && handle.length <= 16;

  // 폼 전체의 유효성 검사
  const isFormValid = isNicknameValid && isHandleValid;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-4">프로필 설정</h1>
      <ModifyProfileImg />
      <div className="mb-2">
        <CommonInput
          text="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="커뮤니티에서 사용할 닉네임"
        />
        {!isNicknameValid && nickname.length > 0 && (
          <p className="text-red-500">닉네임은 1글자 이상, 10글자 이하여야 합니다.</p>
        )}
      </div>
      <div className="mb-4">
        <CommonInput
          text="핸들"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="개인페이지 ID"
        />
        {!isHandleValid && handle.length > 0 && (
          <p className="text-red-500">핸들은 1글자 이상, 16글자 이하여야 합니다.</p>
        )}
      </div>
      <SubmitButton isFormValid={isFormValid} text="설정" width="w-36" />
    </div>
  );
}

export default SetInitialProfile;
