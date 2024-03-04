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
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import DetailImage from '@/molecules/DetailImage/DetailImage';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  /* 앨범 */
  const myPageImageMatch = useMatch('/mypage/detail/:imageId');
  const layoutId = myPageImageMatch?.params.imageId;
  const isAlbumDetail = myPageImageMatch != null;

  /* 보드 */
  const boardImageMatch = useMatch('/mypage/board/:boardText');
  const boardDetailMatch = useMatch('/mypage/board/:boardText/detail/:imageId');
  const boardlayoutId = boardDetailMatch?.params.imageId;
  const isBoardDetail = boardDetailMatch != null;

  const boardText = boardImageMatch?.params.boardText;
  const onBoardClicked = (boardText) => {
    navigate(`/mypage/board/${boardText}`);
  };

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-4 mb-8">
      <div className="flex flex-col items-center p-3">
        <ProfileImage editable={false} />
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
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
          >
            {(pathname === '/mypage' || myPageImageMatch) && <UnderBar layoutId="underBar" margin="mt-1" />}
          </LinkButton>
        </Link>

        <Link to="/mypage/board">
          <LinkButton
            text="보드"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
          >
            {(pathname === '/mypage/board' || boardImageMatch || boardDetailMatch) && (
              <UnderBar layoutId="underBar" margin="mt-1" />
            )}
          </LinkButton>
        </Link>

        <Link to="/mypage/post">
          <LinkButton
            text="게시물"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[16px]"
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
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
          />
          {pathname === '/mypage/bookmark' && <UnderBar layoutId="underBar" margin="mt-1" />}
        </Link>
      </div>

      {/* 앨범 */}
      {(pathname === '/mypage' || isAlbumDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate />
        </div>
      )}
      {myPageImageMatch && <DetailImage layoutId={layoutId} />}

      {/* 보드 */}
      {pathname === '/mypage/board' && !boardImageMatch && !boardDetailMatch && (
        <div className="flex flex-wrap justify-center mt-4 gap-[12px]">
          <BoardTemplate text={'Simple'} onBoardClick={onBoardClicked} />
          <BoardTemplate text={'Daily'} onBoardClick={onBoardClicked} />
          <BoardTemplate text={'Modern'} onBoardClick={onBoardClicked} />
          <BoardTemplate text={'Vintage'} onBoardClick={onBoardClicked} />
        </div>
      )}

      {(boardImageMatch || isBoardDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate boardText={boardText} />
        </div>
      )}

      {boardDetailMatch && <DetailImage layoutId={boardlayoutId} />}

      {/* 게시물 */}
      {pathname === '/mypage/post' && (
        <div className="flex flex-col items-center mt-4 h-[210px]">
          <OverlapTemplate text={'All'} />
        </div>
      )}

      {/* 북마크 */}
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
