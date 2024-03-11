/* UI 컴포넌트 */
import MyProfile from '@/molecules/MyProfile/MyProfile';
import MyPageCategoryBar from '@/molecules/MyPageCategoryBar/MyPageCategoryBar';

/* 템플릿 */
import MyImageTemplateNew from '@/molecules/MyImageTemplate/MyImageTemplateNew';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import MyPostTemplateNew from '@/molecules/MyPostTemplate/MyPostTemplateNew';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';

/* 데이터 */
import pb from '@/api/pocketbase';
import { useEffect, useRef } from 'react';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { fetchAlbumsData, fetchBoardsData, fetchBookmarksData, fetchPostsData } from '@/utils/getMyPageData';
import {
  useAlbumStore,
  useBoardStore,
  usePostStore,
  useBookmarkStore,
  useAllBookmarkStore,
  useCustomBookmarkStore,
  useFilteredBoardsStore,
} from '@/zustand/useStore';

function MyPage() {
  const { albums, setAlbums } = useAlbumStore();
  const { boards, setBoards } = useBoardStore();
  const { filteredBoards, setFilteredBoards } = useFilteredBoardsStore();
  const { posts, setPosts } = usePostStore();
  /* 북마크 스토어 */
  const { bookmarks, setBookmarks } = useBookmarkStore();
  const { allImages, setAllImages } = useAllBookmarkStore();
  const { customImages, setCustomImages } = useCustomBookmarkStore();

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isFetching = useRef(false);

  async function fetchData(path) {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      if (path === '/mypage') {
        const resolvedAlbumsWithImages = await fetchAlbumsData();
        setAlbums(resolvedAlbumsWithImages);
      } else if (path === '/mypage/board') {
        const resolvedBoardsWithImages = await fetchBoardsData();
        setBoards(resolvedBoardsWithImages);
      } else if (path === '/mypage/post') {
        const postData = await fetchPostsData();
        setPosts(postData);
      } else if (path === '/mypage/bookmark') {
        const bookmarks = await fetchBookmarksData();
        setBookmarks(bookmarks);

        const allImages = bookmarks.find((b) => b.name === 'All')?.images || [];
        const customImages = bookmarks.filter((b) => b.name !== 'All');

        useAllBookmarkStore.setState({ allImages });
        useCustomBookmarkStore.setState({ customImages });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isFetching.current = false;
    }
  }
  useEffect(() => {
    fetchData(pathname);
  }, [pathname]);

  /* 앨범 */
  const myPageDetailMatch = useMatch('/mypage/detail/:imageId');
  const layoutId = myPageDetailMatch?.params.imageId;
  const isAlbumDetail = myPageDetailMatch != null;

  /* 보드 */
  const boardMatch = useMatch('/mypage/board/:boardText');
  const boardDetailMatch = useMatch('/mypage/board/:boardText/detail/:imageId');
  const boardlayoutId = boardDetailMatch?.params.imageId;
  const isBoardDetail = boardDetailMatch != null;
  const { boardText } = useParams();

  /* 북마크 */
  const bookmarkAllMatch = useMatch('/mypage/bookmark/field/all');
  const bookmarkAllDetailMatch = useMatch('/mypage/bookmark/field/all/detail/:imageId');
  // const bookmarkAlllayoutId = bookmarkAllDetailMatch?.params.imageId;
  // const isBookmarkAllDetail = bookmarkAllDetailMatch != null;

  const bookmarkBoardMatch = useMatch('/mypage/bookmark/:boardText');
  const bookmarkDetailMatch = useMatch('/mypage/bookmark/:boardText/detail/:imageId');
  // const bookmarklayoutId = bookmarkDetailMatch?.params.imageId;
  // const isBookmarkDetail = bookmarkDetailMatch != null;

  const currentCategory = bookmarkBoardMatch?.params.boardText;
  let imagesToShow;
  if (bookmarkAllMatch) {
    imagesToShow = allImages;
  } else if (bookmarkBoardMatch) {
    const selectedCategoryData = customImages.find(
      (category) => category.name.toLowerCase() === currentCategory.toLowerCase(),
    );
    imagesToShow = selectedCategoryData?.images || [];
  }

  const onBoardClicked = (boardText) => {
    if (location.pathname.endsWith('/mypage/board')) {
      navigate(`/mypage/board/${boardText}`);
    } else if (location.pathname.endsWith('/mypage/bookmark')) {
      navigate(`/mypage/bookmark/${boardText}`);
    }
  };

  const onOverlapClicked = () => {
    navigate(`/mypage/bookmark/field/all`);
  };

  /*  보드 카테고리 필터링 */
  useEffect(() => {
    if (boardText) {
      const selectedBoardImages =
        boards.find((board) => board.name.toLowerCase() === boardText.toLowerCase())?.images || [];
      setFilteredBoards(selectedBoardImages);
    }
  }, [boardText, boards, setFilteredBoards]);

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-4 mb-8">
      <MyProfile />
      <MyPageCategoryBar />

      {/* 앨범 */}
      {(pathname === '/mypage' || isAlbumDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          {albums.map((album) => (
            <MyImageTemplateNew key={album.id} images={album.images} />
          ))}
        </div>
      )}
      {myPageDetailMatch && <MyDetailImage layoutId={layoutId} />}

      {/* 보드 */}
      {pathname === '/mypage/board' && !boardMatch && !boardDetailMatch && (
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

      {(boardMatch || isBoardDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyImageTemplateNew images={filteredBoards} />
        </div>
      )}

      {boardDetailMatch && <MyDetailImage layoutId={boardlayoutId} />}

      {/* 게시물 */}
      {pathname === '/mypage/post' && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplateNew key={posts} images={posts} title={posts} />
        </div>
      )}

      {/* 북마크 */}
      {pathname === '/mypage/bookmark' && !bookmarkBoardMatch && !bookmarkDetailMatch && (
        <div className="flex justify-center min-h-[600px]">
          <div
            className="grid sm:grid-cols-2 grid-cols-1 gap-[15px] justify-center my-6"
            style={{ gridAutoRows: 'min-content' }}
          >
            <div className="flex flex-col items-center h-[210px]">
              <OverlapTemplate text={'All'} images={allImages} onClick={onOverlapClicked} />
            </div>
            {customImages.map((bookmark) => (
              <BoardTemplate
                key={bookmark.id}
                text={bookmark.name}
                images={bookmark.images}
                onBoardClick={() => onBoardClicked(bookmark.name.toLowerCase())}
              />
            ))}
          </div>
        </div>
      )}

      {bookmarkAllMatch && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplateNew images={allImages} />
        </div>
      )}
      {bookmarkBoardMatch && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplateNew images={imagesToShow} />
        </div>
      )}
    </div>
  );
}
export default MyPage;
