/* UI */
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';

/* 템플릿 */
import MyImageTemplateNew from '@/molecules/MyImageTemplate/MyImageTemplateNew';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import MyPostTemplate from '@/molecules/MyPostTemplate/MyPostTemplate';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';

/* 데이터 */
import { useEffect, useRef } from 'react';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { useAlbumStore, useBoardStore, useFilteredImagesStore, usePostStore } from '@/zustand/useStore';
import { fetchAlbumsData, fetchBoardsData, fetchPostsData } from '@/utils/getMyPageData';

function MyPage() {
  const { albums, setAlbums } = useAlbumStore();
  const { boards, setBoards } = useBoardStore();
  const { filteredImages, setFilteredImages } = useFilteredImagesStore();
  const { posts, setPosts } = usePostStore();

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isFetching = useRef(false);

  async function getData() {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      const resolvedAlbumsWithImages = await fetchAlbumsData();
      setAlbums(resolvedAlbumsWithImages);

      const resolvedBoardsWithImages = await fetchBoardsData();
      setBoards(resolvedBoardsWithImages);

      const postData = await fetchPostsData();
      setPosts(postData); // 게시물 데이터를 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isFetching.current = false;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  /* 앨범 */
  const myPageImageMatch = useMatch('/mypage/detail/:imageId');
  const layoutId = myPageImageMatch?.params.imageId;
  const isAlbumDetail = myPageImageMatch != null;

  /* 보드 */
  const boardImageMatch = useMatch('/mypage/board/:boardText');
  const boardDetailMatch = useMatch('/mypage/board/:boardText/detail/:imageId');
  const boardlayoutId = boardDetailMatch?.params.imageId;
  const isBoardDetail = boardDetailMatch != null;
  const { boardText } = useParams();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const onBoardClicked = (boardText) => {
    navigate(`/mypage/board/${boardText}`);
  };

  // 보드 카테고리 필터링
  useEffect(() => {
    if (boardText) {
      const newFilteredImages = boards.flatMap((board) => board.images.filter((image) => image.category === boardText));
      setFilteredImages(newFilteredImages);
    }
  }, [boardText, boards, setFilteredImages]);

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
          <StrokeButton text="계정 관리" onClick={() => handleNavigate('/mypage/account')} />
          <StrokeButton text="프로필 수정" onClick={() => handleNavigate('/mypage/editProfile')} />
        </div>
      </div>
      {/* 카테고리 바 */}
      <div className="flex justify-evenly pt-2">
        <LinkButton
          text="앨범"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[16px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage')}
        >
          {(pathname === '/mypage' || myPageImageMatch) && <UnderBar layoutId="underBar" margin="mt-1" />}
        </LinkButton>

        <LinkButton
          text="보드"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[16px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage/board')}
        >
          {(pathname === '/mypage/board' || boardImageMatch || boardDetailMatch) && (
            <UnderBar layoutId="underBar" margin="mt-1" />
          )}
        </LinkButton>

        <LinkButton
          text="게시물"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[16px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage/post')}
        >
          {pathname === '/mypage/post' && <UnderBar layoutId="underBar" margin="mt-1" />}
        </LinkButton>

        <LinkButton
          text="북마크"
          fontWeight="font-bold"
          fontColor="text-content"
          fontSize="text-[16px]"
          hoverColor="hover:text-black"
          onClick={() => handleNavigate('/mypage/bookmark')}
        >
          {pathname === '/mypage/bookmark' && <UnderBar layoutId="underBar" margin="mt-1" />}
        </LinkButton>
      </div>

      {/* 앨범 */}
      {(pathname === '/mypage' || isAlbumDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          {albums.map((album) => (
            <MyImageTemplateNew key={album.id} images={album.images} />
          ))}
        </div>
      )}
      {myPageImageMatch && <MyDetailImage layoutId={layoutId} />}

      {/* 보드 */}
      {pathname === '/mypage/board' && !boardImageMatch && !boardDetailMatch && (
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

      {(boardImageMatch || isBoardDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyImageTemplateNew images={filteredImages} />
        </div>
      )}

      {boardDetailMatch && <MyDetailImage layoutId={boardlayoutId} />}

      {/* 게시물 */}
      {pathname === '/mypage/post' && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplate key={posts} images={posts} title={posts} />
        </div>
      )}

      {/* 북마크 */}
      {pathname === '/mypage/bookmark' && (
        <div className="flex justify-center min-h-[600px]">
          <div
            className="grid sm:grid-cols-2 grid-cols-1 gap-[15px] justify-center my-6"
            style={{ gridAutoRows: 'min-content' }}
          >
            <div className="flex flex-col items-center h-[210px] mt-2">
              <OverlapTemplate text={'All'} />
            </div>
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
    </div>
  );
}
export default MyPage;
