import DetailImage from '@/atoms/DetailImage/DetailImage';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import UnderBar from '@/atoms/UnderBar/UnderBar';
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useLocation, useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SelectPostImage() {
  const location = useLocation();
  const pathname = location.pathname;
  const newPostImageMatch = useMatch('/mypage/newpost/detail/:imageId');
  const layoutId = newPostImageMatch?.params.imageId;
  console.log(newPostImageMatch);

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
            {pathname === '/mypage/newpost' && <UnderBar layoutId="post-underBar" margin="mt-1" />}
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
            {pathname === '/mypage/newpost/board' && <UnderBar layoutId="post-underBar" margin="mt-1" />}
          </LinkButton>
        </Link>
      </div>

      {location.pathname.startsWith('/mypage/newpost') && (
        <div className="flex flex-col items-center mt-8 h-auto">
          <ImageTemplate />
          {newPostImageMatch && <DetailImage layoutId={layoutId} />}
        </div>
      )}

      {location.pathname.endsWith('/mypage/newpost/board') && (
        <div className="flex flex-wrap justify-center mt-4 gap-[12px]">
          <BoardTemplate text={'Simple'} />
          <BoardTemplate text={'Daily'} />
          <BoardTemplate text={'Modern'} />
          <BoardTemplate text={'Vintage'} />
        </div>
      )}
    </div>
  );
}
export default SelectPostImage;
