import DetailImage from '@/molecules/DetailImage/DetailImage';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SelectPostImage() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  /* 앨범 */
  const newPostImageMatch = useMatch('/mypage/newpost/detail/:imageId');
  const layoutId = newPostImageMatch?.params.imageId;
  const isAlbumDetail = newPostImageMatch != null;

  /* 보드 */
  const boardImageMatch = useMatch('/mypage/newpost/board/:boardText');
  const boardDetailMatch = useMatch('/mypage/newpost/board/:boardText/detail/:imageId');
  const boardlayoutId = boardDetailMatch?.params.imageId;
  const isBoardDetail = boardDetailMatch != null;

  const boardText = boardImageMatch?.params.boardText;
  const onBoardClicked = (boardText) => {
    navigate(`/mypage/newpost/board/${boardText}`);
  };

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-2 mb-8">
      <div className="flex justify-evenly pt-2">
        <Link to="/mypage/newpost">
          <LinkButton
            text="앨범"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[20px]"
            hoverColor="hover:text-black"
          >
            {(pathname === '/mypage/newpost' || newPostImageMatch) && (
              <UnderBar layoutId="post-underBar" margin="mt-1" />
            )}
          </LinkButton>
        </Link>

        <Link to="/mypage/newpost/board">
          <LinkButton
            text="보드"
            fontWeight="font-bold"
            fontColor="text-content"
            fontSize="text-[20px]"
            hoverColor="hover:text-black"
          >
            {(pathname === '/mypage/newpost/board' || boardImageMatch || boardDetailMatch) && (
              <UnderBar layoutId="post-underBar" margin="mt-1" />
            )}
          </LinkButton>
        </Link>
      </div>

      {/* 앨범 */}
      {(pathname === '/mypage/newpost' || isAlbumDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate />
          {newPostImageMatch && <DetailImage layoutId={layoutId} />}
        </div>
      )}

      {/* 보드 */}
      {pathname === '/mypage/newpost/board' && !boardImageMatch && !boardDetailMatch && (
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
    </div>
  );
}
export default SelectPostImage;
