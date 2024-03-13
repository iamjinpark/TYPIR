import Masonry from 'react-masonry-component';
import useResizeUpdateView from '@/hooks/useResizeUpdateView';
import TextContents from '@/atoms/TextContents/TextContents';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useImageStore } from '@/zustand/useStore';

function MyPostTemplate({ images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedImageUrl = useImageStore((state) => state.setSelectedImageUrl);
  const { boardText } = useParams();

  // 창 크기 조정에 따라 컴포넌트 리-렌더링
  useResizeUpdateView();

  const onBoxClicked = (imageId, imageUrl, postImageUrl, context, username) => {
    if (location.pathname.startsWith('/mypage/post')) {
      navigate(`/mypage/post/detail/${imageId}`, {
        state: { imageSrc: imageUrl, postImageSrc: postImageUrl, context, writerInfo: username },
      });
    } else if (location.pathname.includes('all')) {
      navigate(`/mypage/bookmark/field/all/detail/${imageId}`, {
        state: { imageSrc: imageUrl, postImageSrc: postImageUrl, context, writerInfo: username },
      });
    } else if (boardText) {
      navigate(`/mypage/bookmark/${boardText}/detail/${imageId}`, {
        state: { imageSrc: imageUrl, postImageSrc: postImageUrl, context, writerInfo: username },
      });
    } else if (location.pathname.endsWith('/community')) {
      navigate(`/community/detail/${imageId}`, {
        state: { imageSrc: imageUrl, postImageSrc: postImageUrl, context, writerInfo: username },
      });
    }
    setSelectedImageUrl(imageUrl);
    console.log(username);
  };

  return (
    <Masonry
      elementType="ul"
      className={`min-w-[320px] min-h-[600px] max-w-screen-md h-auto bg-white relative`}
      options={{
        gutter: 15,
        horizontalOrder: true,
        itemSelector: '.masonry-item',
        transitionDuration: 0,
        fitWidth: true,
      }}
    >
      {images.map(({ id, postImageUrl, title, imageUrl, context, username }, index) => (
        <motion.li key={id} layoutId={id} className="masonry-item absolute h-[350px]" style={{ margin: '-2px' }}>
          <button type="button" onClick={() => onBoxClicked(id, imageUrl, postImageUrl, context, username)}>
            <img
              src={postImageUrl}
              className={`w-[170px] h-[260px] bg-gray-100 rounded-2xl cursor-zoom-in object-cover`}
            />
            <TextContents
              text={title}
              maxLength={25}
              fontFamily="font-serif"
              fontWeight="font-semilight"
              fontSize="text-[14px]"
              padding="p-2"
              style={{
                width: '170px',
                textAlign: 'center',
              }}
            />
          </button>
        </motion.li>
      ))}
    </Masonry>
  );
}

export default MyPostTemplate;
