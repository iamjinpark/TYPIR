import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';

function MyPage() {
  const navigate = useNavigate();

  const handleAccountManagementClick = () => {
    navigate('/mypage/account');
  };

  const handleEditProfileClick = () => {
    navigate('/mypage/editProfile');
  };

  return (
    <div className="w-80 h-auto bg-white">
      <div className="flex flex-col items-center p-3">
        <ProfileImage />
        <ProfileUserName />
        <div className="flex gap-1">
          <HandleLogo />
          <HandleText />
        </div>
        <div className="flex gap-4 mt-4">
          <StrokeButton text="계정 관리" onClick={handleAccountManagementClick} />
          <StrokeButton text="프로필 수정" onClick={handleEditProfileClick} />
        </div>
      </div>
      <div className="flex justify-evenly pt-2">
        <LinkButton text="앨범" fontColor="text-content" fontSize="text-[14px]" />
        <LinkButton text="보드" fontColor="text-content" fontSize="text-[14px]" />
        <LinkButton text="게시물" fontColor="text-content" fontSize="text-[14px]" />
        <LinkButton text="북마크" fontColor="text-content" fontSize="text-[14px]" />
      </div>
      <div className="flex flex-col items-center mt-4 h-[210px]">
        <OverlapTemplate text={'All'} />
      </div>
      <div className="flex justify-center mt-4">
        <BoardTemplate text={'Modern'} />
      </div>
    </div>
  );
}
export default MyPage;
