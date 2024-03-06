/* UI */
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import ProfileUserName from '@/atoms/ProfileUserName/ProfileUserName';
import HandleLogo from '@/atoms/HandleLogo/HandleLogo';
import HandleText from '@/atoms/HandleText/HandleText';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';

/* 템플릿 */
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import MyImageTemplate from '@/molecules/MyImageTemplate/MyImageTemplate';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';

/* 데이터 */
import pb from '@/api/pocketbase';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useAlbumStore, useBoardStore } from '@/zustand/useStore';
import { useEffect, useRef } from 'react';
import getPbImage, { getPbImages } from '@/utils/getPbImage';

function MyPage() {
  const { albums, setAlbums } = useAlbumStore();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isFetching = useRef(false);

  async function getData() {
    if (isFetching.current) return; // 중복 요청 방지
    isFetching.current = true;

    try {
      // 'album' 콜렉션에서 relation 연결된 'styles' 데이터 가져오기
      const albumData = await pb.collection('album').getList(1, 50);
      const albumsWithImages = albumData.items.map(async (album) => {
        const relationedStyles = await Promise.all(
          album.images.map(async (imageId) => {
            const styleRecord = await pb.collection('styles').getOne(imageId);
            return {
              id: styleRecord.id,
              imageUrl: getPbImage(styleRecord),
            };
          }),
        );

        // relationedStyles는 각 스타일 레코드에 대한 이미지 URL을 포함하는 배열입니다.
        return { ...album, images: relationedStyles };
      });

      // 앨범 데이터를 상태에 저장
      const resolvedAlbumsWithImages = await Promise.all(albumsWithImages);
      setAlbums(resolvedAlbumsWithImages);

      // 'board' 콜렉션에서 데이터 가져오기
      const boardData = await pb.collection('board').getFullList();
      const boards = boardData.map((board) => {
        const imageURLs = getPbImages({
          collectionId: board.collectionId,
          id: board.id,
          images: board.images,
        });
        return { ...board, images: imageURLs };
      });

      // 데이터 저장
      useBoardStore.getState().setBoards(boards);

      // console.log(albumData.items);
      // console.log(boards);

      // 최종적으로 필요한 데이터 반환
      return { albums: albumData.items, boards: boards };
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
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
  const boards = useBoardStore((state) => state.boards);

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

      {/* 카테고리 바 */}
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
          {albums.map((album) => (
            <MyImageTemplate key={album.id} images={album.images} />
          ))}
        </div>
      )}
      {myPageImageMatch && <MyDetailImage layoutId={layoutId} />}

      {/* 보드 */}
      {pathname === '/mypage/board' && !boardImageMatch && !boardDetailMatch && (
        <div className="flex flex-wrap justify-center mt-4 gap-[12px]">
          {boards.map((board) => (
            <BoardTemplate
              key={board.id}
              text={board.name}
              images={board.images}
              onBoardClick={() => onBoardClicked(board.name)}
            />
          ))}
        </div>
      )}

      {(boardImageMatch || isBoardDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate boardText={boardText} />
        </div>
      )}

      {boardDetailMatch && <MyDetailImage layoutId={boardlayoutId} />}

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
