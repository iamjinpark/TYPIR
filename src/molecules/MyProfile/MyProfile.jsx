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
  const { userList, setUserList, imageUrl, setImageUrl } = useProfileStore();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    let isCancelled = false;

    const fetchUserRecords = async () => {
      try {
        const nowUser = await getStorage('pocketbase_auth');
        const nowUserId = nowUser.model.id;

        if (!isCancelled) {
          const records = await pb.collection('users').getOne(nowUserId);
          if (!isCancelled) {
            setUserList(records);
            const profileImageUrl = getPbImage({
              collectionId: 'users',
              id: records.id,
              image: records.profile,
            });
            setImageUrl(profileImageUrl);
          }
        }
      } catch (error) {
        if (!error.isAbort && !isCancelled) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchUserRecords();

    return () => {
      isCancelled = true;
    };
  }, [setUserList, setImageUrl]);

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
