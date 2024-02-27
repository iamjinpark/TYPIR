import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTo = location.state?.scrollTo || 0;
  const pathname = location.pathname;

  const handleAccountManagementClick = () => {
    navigate('/mypage/account');
  };

  const handleEditProfileClick = () => {
    navigate('/mypage/editProfile');
  };

  const handleAlbumClick = () => {
    navigate('/mypage/album');
  };

  const handleBoardClick = () => {
    navigate('/mypage/board');
  };

  const handleBookmarkClick = () => {
    navigate('/mypage/bookmark');
  };

  useEffect(() => {
    window.scrollTo(0, scrollTo);
  }, [location.key, scrollTo]);

  return (
    <div className="w-[320px] h-auto min-h-[600px] bg-white mb-8">
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
        <LinkButton
          text="앨범"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[14px]"
          hoverColor="hover:text-black"
          onClick={handleAlbumClick}
        />
        <LinkButton
          text="보드"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[14px]"
          hoverColor="hover:text-black"
          onClick={handleBoardClick}
        />
        <LinkButton
          text="게시물"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[14px]"
          hoverColor="hover:text-black"
        />
        <LinkButton
          text="북마크"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[14px]"
          hoverColor="hover:text-black"
          onClick={handleBookmarkClick}
        />
      </div>

      {(pathname === '/mypage' || pathname === '/mypage/album') && (
        <div className="flex flex-col items-center mt-4 h-[210px]">
          <OverlapTemplate text={'All'} />
        </div>
      )}

      {pathname === '/mypage/board' && (
        <div className="flex justify-center mt-4">
          <BoardTemplate text={'Modern'} />
        </div>
      )}

      {pathname === '/mypage/bookmark' && (
        <>
          <div className="flex flex-col items-center mt-4 h-[210px]">
            <OverlapTemplate text={'All'} />
          </div>
          <div className="flex justify-center mt-4">
            <BoardTemplate text={'Modern'} />
          </div>
        </>
      )}
    </div>
  );
}
export default MyPage;
