import React, { useEffect } from 'react';
import { getPbImage } from '@/utils';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import { useNavigate } from 'react-router-dom';
import { useProfileStore } from '@/zustand/useStore';

export default function MyProfile() {
  const { profiles, setProfiles } = useProfileStore();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // LocalStorage에서 프로필 정보를 불러와 Zustand 스토어에 저장
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setProfiles([JSON.parse(storedUser)]);
    }
  }, [setProfiles]);

  if (profiles.length === 0) {
    // 프로필 정보가 없는 경우
    return <div>Loading...</div>;
  }

  const profile = profiles[0]; // 첫 번째 프로필 정보 사용
  const imageUrl = getPbImage({
    collectionId: '_pb_users_auth_', // 적절한 컬렉션 ID
    // id: profile.id, // profile 객체에 id 속성이 있다고 가정
    id: '7celmvekv3wfnm7', // profile 객체에 id 속성이 있다고 가정
    image: profile.profile, // profile.profile이 이미지 파일명이라고 가정
  });

  return (
    <div className="flex flex-col items-center p-3">
      <ProfileImage imageUrl={imageUrl} editable={false} margin="mb-4" />
      <ProfileUserName text={profile.userName} isPrivate={profile.isPrivate} />
      <div className="flex gap-1">
        <HandleLogo />
        <HandleText text={profile.handle} />
      </div>
      <div className="flex gap-4 mt-4">
        <StrokeButton text="계정 관리" onClick={() => handleNavigate('/mypage/account')} />
        <StrokeButton text="프로필 수정" onClick={() => handleNavigate('/mypage/editProfile')} />
      </div>
    </div>
  );
}
