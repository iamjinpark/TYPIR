import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';

export default function MyPageCategoryBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleNavigate = (path) => {
    navigate(path);
  };

  /* 앨범 */
  const myPageImageMatch = useMatch('/mypage/detail/:imageId');

  /* 보드 */
  const boardImageMatch = useMatch('/mypage/board/:boardText');
  const boardDetailMatch = useMatch('/mypage/board/:boardText/detail/:imageId');

  /* 북마크 */
  const bookmarkImageMatch = useMatch('/mypage/bookmark/:boardText');
  const bookmarkDetailMatch = useMatch('/mypage/bookmark/:boardText/detail/:imageId');

  return (
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
        {(pathname === '/mypage/bookmark' || bookmarkImageMatch || bookmarkDetailMatch) && (
          <UnderBar layoutId="underBar" margin="mt-1" />
        )}
      </LinkButton>
    </div>
  );
}
