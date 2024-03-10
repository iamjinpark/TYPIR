import Masonry from 'react-masonry-component';
import useResizeUpdateView from '@/hooks/useResizeUpdateView';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useImageStore } from '@/zustand/useStore';

function MyImageTemplateNew({ images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedImageUrl = useImageStore((state) => state.setSelectedImageUrl);

  // 창 크기 조정에 따라 컴포넌트 리-렌더링
  useResizeUpdateView();

  const onBoxClicked = (imageId, imageUrl, category) => {
    if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/board')) {
      navigate(`/mypage/board/${category}/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/bookmark')) {
      navigate(`/mypage/bookmark/${category}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/newpost')) {
      navigate(`/mypage/newpost/newBoard/${imageId}`, { state: { imageSrc: imageUrl } });
    } else if (location.pathname.includes('/newpost/board')) {
      navigate(`/mypage/newpost/newBoard/${imageId}`, { state: { imageSrc: imageUrl } });
    }
    setSelectedImageUrl(imageUrl);
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
      {images.map(({ id, alt, imageUrl, category }, index) => (
        <motion.li key={id} layoutId={id} className="masonry-item absolute" style={{ margin: '-2px' }}>
          <button type="button" onClick={() => onBoxClicked(id, imageUrl, category)}>
            <img src={imageUrl} alt={alt} className={`w-[170px] bg-gray-100 rounded-2xl mb-[15px] cursor-zoom-in`} />
          </button>
        </motion.li>
      ))}
    </Masonry>
  );
}

export default MyImageTemplateNew;
