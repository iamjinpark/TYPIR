import Backward from '@/atoms/Backward/Backward';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import HandleText from '@/atoms/HandleText/HandleText';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import TextContents from '@/atoms/TextContents/TextContents';
import { useState } from 'react';

function EditProfile() {
  const [nickname, setNickname] = useState('');
  const [handle, setHandle] = useState('');

  const isNameValid = /^[a-zA-Z]+$/.test(nickname) && nickname.length >= 3 && nickname.length <= 16;
  const isHandleValid = /^[a-zA-Z]+$/.test(handle) && handle.length >= 3 && handle.length <= 16;

  return (
    <div className="w-full h-[570px] bg-white flex flex-col items-center mb-8">
      <div className="w-full flex justify-between p-5">
        <div className="flex-1">
          <Backward />
        </div>
        <TextContents text="프로필 수정" fontWeight="font-bold" fontSize="text-[20px]" />
        <div className="flex-1"></div>
      </div>
      <ProfileImage />
      <CommonInput
        text="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="커뮤니티에서 사용할 닉네임"
      />
      <div className="text-red-500 text-xs h-1 -translate-x-7">
        {!isNameValid && nickname.length > 0 && '3글자 이상, 16글자 이하의 영문이어야 합니다.'}
      </div>
      <CommonInput text="핸들" value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="개인페이지 ID" />
      <div className="text-red-500 text-xs h-1 -translate-x-7 mb-9">
        {!isHandleValid && handle.length > 0 && '3글자 이상, 16글자 이하의 영문이어야 합니다.'}
      </div>

      <CommonButton />
    </div>
  );
}
export default EditProfile;
