import Backward from '@/atoms/Backward/Backward';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import HandleText from '@/atoms/HandleText/HandleText';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import TextContents from '@/atoms/TextContents/TextContents';
import { getPbImage } from '@/utils';
import { useProfileStore, useUserStore } from '@/zustand/useStore';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';

const isSpecialCharPresent = (string) => {
  return /[^a-zA-Z0-9_ㄱ-힣]/.test(string);
  // 영문자, 숫자, 한글, 언더스코어 이외의 문자가 있는지 체크
};

function EditProfile() {
  const { userList, setUserList } = useUserStore();
  const {
    profiles,
    setProfiles,
    username,
    setUserName,
    handle,
    setHandle,
    nameValid,
    handleValid,
    imageUrl,
    setImageUrl,
  } = useProfileStore();

  useEffect(() => {
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    // const user = JSON.parse(storedUser);
    setProfiles([userList]);
    setUserName(userList?.username);
    setHandle(userList?.handle);
    setUserList(userList);
    setImageUrl(
      getPbImage({
        collectionId: 'users',
        id: userList?.id,
        image: userList?.profile,
      }),
    );
  }, [setProfiles, setUserName, setHandle, setImageUrl, userList, setUserList]);

  // const isNameValid = nameValid(username);
  // const isHandleValid = handleValid(handle);
  console.log(userList);

  // const user = JSON.parse(localStorage.getItem('user'));
  const userId = userList.id;
  console.log(userId);

  const handleSaveButton = async (event) => {
    event.preventDefault(); // preventDefault 함수 호출 방식 수정

    // userList가 정의되어 있지 않으면 기본값인 빈 객체로 설정
    const userData = {
      username: username,
      handle: handle,
      profile: userList?.profile || null, // userList.profile이 없는 경우에 대한 처리 추가
    };

    if (userId) {
      // userId가 정의되어 있는 경우에만 업데이트 요청을 보냄
      try {
        await pb.collection('users').update(userId, userData);
      } catch (error) {
        console.error('데이터 저장 실패:', error);
      }
    } else {
      console.error('유저 아이디가 없습니다.'); // userId가 정의되지 않은 경우 에러 처리
    }
  };

  return (
    <form className="w-full h-[570px] bg-white flex flex-col items-center mb-8">
      <div className="w-full flex justify-between p-7">
        <div className="flex-1">
          <Backward />
        </div>
        <TextContents text="프로필 수정" fontWeight="font-bold" fontSize="text-[20px]" />
        <div className="flex-1"></div>
      </div>
      <ProfileImage imageUrl={imageUrl} />

      <div className="nickname-input-wrapper mt-2">
        <CommonInput
          text="닉네임"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="커뮤니티에서 사용할 닉네임"
          margin="mt-1"
        />
        <div className="text-red-500 text-xs h-1 mt-1 ml-1">
          {/* {!isNameValid && '3글자 이상, 16글자 이하의 영문, 숫자만 사용 가능합니다.'} */}
        </div>
      </div>

      <div className="handle-input-wrapper">
        <CommonInput
          text="핸들"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="개인페이지 ID"
          margin="mt-1"
        />
        <div className="text-red-500 text-xs h-1 mt-1 mb-9 ml-1">
          {/* {!isHandleValid && !isSpecialCharPresent(handle) && '3글자 이상, 16글자 이하의 영문, 숫자만 사용 가능합니다.'} */}
          {isSpecialCharPresent(handle) && '특수문자는 언더스코어(_)만 허용됩니다.'}
        </div>
      </div>

      <CommonButton type="submit" onClick={handleSaveButton} />
    </form>
  );
}
export default EditProfile;
