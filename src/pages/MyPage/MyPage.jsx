import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';
import UnderBar from '@/atoms/UnderBar/UnderBar';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function MyPage() {
  const location = useLocation();
  const scrollTo = location.state?.scrollTo || 0;
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, scrollTo);
  }, [location.key, scrollTo]);

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mb-8">
      <div className="flex flex-col items-center p-3">
        <ProfileImage />
        <ProfileUserName />
        <div className="flex gap-1">
          <HandleLogo />
          <HandleText />
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="/mypage/account">
            <StrokeButton text="계정 관리" />
          </Link>
          <Link to="/mypage/editProfile">
            <StrokeButton text="프로필 수정" />
          </Link>
        </div>
      </div>

      <div className="flex justify-evenly pt-2">
        <Link to="/mypage">
          <LinkButton
            text="앨범"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[14px]"
            hoverColor="hover:text-black"
          >
            {pathname === '/mypage' && <UnderBar layoutId="underBar" margin="mt-1" />}
          </LinkButton>
        </Link>

        <Link to="/mypage/board">
          <LinkButton
            text="보드"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[14px]"
            hoverColor="hover:text-black"
          >
            {pathname === '/mypage/board' && <UnderBar layoutId="underBar" margin="mt-1" />}
          </LinkButton>
        </Link>

        <Link to="/mypage/post">
          <LinkButton
            text="게시물"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[14px]"
            hoverColor="hover:text-black"
          >
            {pathname === '/mypage/post' && <UnderBar layoutId="underBar" margin="mt-1" />}
          </LinkButton>
        </Link>

        <Link to="/mypage/bookmark">
          <LinkButton
            text="북마크"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[14px]"
            hoverColor="hover:text-black"
          />
          {pathname === '/mypage/bookmark' && <UnderBar layoutId="underBar" margin="mt-1" />}
        </Link>
      </div>

      {pathname === '/mypage' && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate />
        </div>
      )}

      {pathname === '/mypage/board' && (
        <div className="flex flex-wrap justify-center mt-4 gap-[12px]">
          <BoardTemplate text={'Simple'} />
          <BoardTemplate text={'Daily'} />
          <BoardTemplate text={'Modern'} />
          <BoardTemplate text={'Vintage'} />
        </div>
      )}

      {pathname === '/mypage/post' && (
        <div className="flex flex-col items-center mt-4 h-[210px]">
          <OverlapTemplate text={'All'} />
        </div>
      )}

      {pathname === '/mypage/bookmark' && (
        <>
          <div className="flex flex-wrap justify-center mt-4 gap-[12px]">
            <div className="flex flex-col items-center h-[210px]">
              <OverlapTemplate text={'All'} />
            </div>
            <BoardTemplate text={'Daily'} />
            <BoardTemplate text={'Modern'} />
            <BoardTemplate text={'Vintage'} />
          </div>
        </>
      )}
    </div>
  );
}
export default MyPage;
