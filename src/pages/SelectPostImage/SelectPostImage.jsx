import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';

import MyImageTemplateNew from '@/molecules/MyImageTemplate/MyImageTemplateNew';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { useAlbumStore, useBoardStore, useFilteredBoardsStore } from '@/zustand/useStore';
import { useEffect } from 'react';

function SelectPostImage() {
  const { albums } = useAlbumStore();
  const { boards } = useBoardStore();
  const { filteredImages, setFilteredImages } = useFilteredBoardsStore();

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const boardMatch = useMatch('/mypage/newpost/board/:boardText');
  const { boardText } = useParams();

  const onBoardClicked = (boardText) => {
    navigate(`/mypage/newpost/board/${boardText}`);
  };

  /* 카테고리 바 경로 이동 */
  const handleNavigate = (path) => {
    navigate(path);
  };

  /* 보드 필터 */
  const currentBoard = boardMatch?.params.boardText;
  let boardsToShow = [];

  if (boardMatch) {
    const selectedCategoryData = filteredImages.find(
      (category) => category.name.toLowerCase() === currentBoard.toLowerCase(),
    );
    boardsToShow = selectedCategoryData?.images || []; // 이미지가 없는 경우 빈 배열을 할당
  }

  useEffect(() => {
    const boardsToShow = boards.filter((board) => board.name !== 'All');
    useFilteredBoardsStore.setState({ filteredImages: boardsToShow });
  }, [boards]);

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-2 mb-8">
      {/* 카테고리 바 */}
      <div className="flex justify-evenly pt-2">
        <LinkButton
          text="앨범"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[20px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage/newpost')}
        >
          {pathname === '/mypage/newpost' && <UnderBar layoutId="post-underBar" margin="mt-1" />}
        </LinkButton>

        <LinkButton
          text="보드"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[20px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage/newpost/board')}
        >
          {(pathname === '/mypage/newpost/board' || boardMatch) && <UnderBar layoutId="post-underBar" margin="mt-1" />}
        </LinkButton>
      </div>

      {/* 앨범 */}
      {pathname === '/mypage/newpost' && (
        <div className="flex flex-col items-center mt-8 h-auto">
          {albums.map((album) => (
            <MyImageTemplateNew key={album.id} images={album.images} />
          ))}
        </div>
      )}

      {/* 보드 */}
      {pathname === '/mypage/newpost/board' && (
        <div className="flex justify-center min-h-[600px]">
          <div
            className="grid sm:grid-cols-2 grid-cols-1 gap-[15px] justify-center my-6"
            style={{ gridAutoRows: 'min-content' }}
          >
            {boards.map((board) => (
              <BoardTemplate
                key={board.id}
                text={board.name}
                images={board.images}
                onBoardClick={() => onBoardClicked(board.name.toLowerCase())}
              />
            ))}
          </div>
        </div>
      )}

      {boardMatch && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyImageTemplateNew images={boardsToShow} />
        </div>
      )}
    </div>
  );
}
export default SelectPostImage;
