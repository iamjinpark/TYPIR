import React, { useEffect, useState } from 'react';
import { getPbImage, getStorage } from '@/utils';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import { useNavigate } from 'react-router-dom';
import { useProfileStore, useUserStore } from '@/zustand/useStore';
import pb from '@/api/pocketbase';

export default function MyProfile() {
  const { userList, setUserList } = useUserStore();
  const { profiles, setProfiles } = useProfileStore();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const fetchUserRecords = async () => {
    try {
      const nowUser = await getStorage('pocketbase_auth');
      const nowUserId = nowUser.model.id; // 프로미스가 아닌 실제 값으로 가져옵니다.
      console.log(nowUserId);

      const records = await pb.collection('users').getOne(nowUserId);
      return records;
    } catch (error) {
      console.error('Error fetching user records:', error);
      throw error; // 에러를 다시 throw하여 호출자에게 전달합니다.
    }
  };

  useEffect(() => {
    fetchUserRecords().then((data) => {
      setUserList(data);
    });
  }, [setUserList]);

  // const storedUser = localStorage.getItem('user');
  // if (storedUser) {
  //   setProfiles([JSON.parse(storedUser)]);
  // }

  console.log(userList);

  // if (profiles.length === 0) {
  //   return <div>Loading...</div>;
  // }

  // const profile = profiles[0];
  const imageUrl = getPbImage({
    collectionId: 'users',
    id: userList?.id,
    image: userList?.profile,
  });
  console.log(imageUrl);

  return (
    <div className="flex flex-col items-center p-3">
      <ProfileImage imageUrl={imageUrl} editable={false} margin="mb-4" />
      <ProfileUserName text={userList?.username} isPrivate={userList?.isPrivate} />
      <div className="flex gap-1">
        <HandleLogo />
        <HandleText text={userList?.handle} />
      </div>
      <div className="flex gap-4 mt-4">
        <StrokeButton text="계정 관리" onClick={() => handleNavigate('/mypage/account')} />
        <StrokeButton text="프로필 수정" onClick={() => handleNavigate('/mypage/editProfile')} />
      </div>
    </div>
  );
}
