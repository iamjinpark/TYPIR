/* UI 컴포넌트 */
import MyProfile from '@/molecules/MyProfile/MyProfile';
import MyPageCategoryBar from '@/molecules/MyPageCategoryBar/MyPageCategoryBar';

/* 템플릿 */
import MyImageTemplate from '@/molecules/MyImageTemplate/MyImageTemplate';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import MyPostTemplate from '@/molecules/MyPostTemplate/MyPostTemplate';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';

/* 데이터 */
import { useEffect, useRef } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { fetchAlbumsData, fetchBoardsData, fetchBookmarksData, fetchPostsData } from '@/utils/getMyPageData';
import {
  useAlbumStore,
  useBoardStore,
  useFilteredBoardsStore,
  usePostStore,
  useBookmarkStore,
  useAllBookmarkStore,
  useCustomBookmarkStore,
  useImageStore,
} from '@/zustand/useStore';

function MyPage() {
  /* 앨범 스토어 */
  const { albums, setAlbums } = useAlbumStore();
  /* 보드 스토어 */
  const { boards, setBoards } = useBoardStore();
  const { boardsToShow, setBoardsToShow } = useFilteredBoardsStore();
  /* 게시물 스토어 */
  const { posts, setPosts, userPosts, setUserPosts } = usePostStore();
  /* 북마크 스토어 */
  const { bookmarks, setBookmarks } = useBookmarkStore();
  const { allImages, setAllImages } = useAllBookmarkStore();
  const { customImages, setCustomImages } = useCustomBookmarkStore();
  /* 이미지 URL 스토어 */
  const { setImageUrls } = useImageStore();

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isFetching = useRef(false);

  async function fetchData(path) {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      if (path === '/mypage') {
        /* 앨범 */
        const resolvedAlbumsWithImages = await fetchAlbumsData();
        setAlbums(resolvedAlbumsWithImages);
        /* 보드 */
      } else if (path === '/mypage/board') {
        const boards = await fetchBoardsData();
        setBoards(boards);

        const filteredImages = boards.filter((b) => b.name !== 'All');
        useFilteredBoardsStore.setState({ filteredImages });
        /* 게시물 */
      } else if (path === '/mypage/post') {
        const posts = await fetchPostsData();
        setPosts(posts);
        const imageUrls = posts.map((post) => post.imageUrl);
        setImageUrls(imageUrls);
        /* 북마크 */
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

  /* 북마크 */
  const bookmarkAllMatch = useMatch('/mypage/bookmark/field/all');
  const bookmarkBoardMatch = useMatch('/mypage/bookmark/:boardText');

  /* 보드 필터 */
  useEffect(() => {
    if (boardMatch) {
      // 선택된 보드 카테고리에 따라 이미지를 필터링
      const selectedCategoryData = boards.find(
        (board) => board.name.toLowerCase() === boardMatch.params.boardText.toLowerCase(),
      );
      setBoardsToShow(selectedCategoryData?.images || []);
    } else if (boardDetailMatch) {
      // 선택된 이미지의 카테고리에 따라 이미지를 필터링
      const imageId = boardDetailMatch.params.imageId;
      const boardForImage = boards.find((board) => board.images.some((image) => image.id === imageId));
      setBoardsToShow(boardForImage?.images || []);
    } else {
      // 모든 이미지를 포함하는 'boardsToShow'를 설정
      setBoardsToShow(boards.flatMap((board) => board.images));
    }
  }, [boards, boardMatch, boardDetailMatch, setBoardsToShow]);

  /* 게시물 필터 */
  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    if (user && posts.length > 0) {
      const filteredPosts = posts.filter((post) => post.username.includes(user.id));
      setUserPosts(filteredPosts);
    }
  }, [posts]);

  /* 북마크 필터 */
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

  return (
    <div className="w-full h-auto min-h-[570px] bg-white mt-4 mb-8">
      <MyProfile />
      <MyPageCategoryBar />

      {/* 앨범 */}
      {(pathname === '/mypage' || isAlbumDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          {albums.map((album) => (
            <MyImageTemplate key={album.id} images={album.images} />
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
                imageProp="imageUrl"
              />
            ))}
          </div>
        </div>
      )}

      {(boardMatch || isBoardDetail) && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyImageTemplate images={boardsToShow} />
        </div>
      )}

      {boardDetailMatch && <MyDetailImage layoutId={boardlayoutId} />}

      {/* 게시물 */}
      {pathname === '/mypage/post' && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplate key={userPosts} images={userPosts} title={userPosts} />
        </div>
      )}

      {/* 북마크 */}
      {pathname === '/mypage/bookmark' && (
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
                imageProp="postImageUrl"
              />
            ))}
          </div>
        </div>
      )}

      {bookmarkAllMatch && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplate images={allImages} />
        </div>
      )}
      {bookmarkBoardMatch && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <MyPostTemplate images={imagesToShow} />
        </div>
      )}
    </div>
  );
}
export default MyPage;
