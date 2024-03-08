import useResizeUpdateView from '@/hooks/useResizeUpdateView';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-component';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import images from '/src/data/images.json';

const ImageTemplate = ({ boardText, margin = 'mt-[15px]', data = images, layoutId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // 창 크기 조정에 따라 컴포넌트 리-렌더링
  useResizeUpdateView();

  const onBoxClicked = (imageId) => {
    const category = searchParams.get('category');
    if (location.pathname.endsWith('/style')) {
      navigate(`/style/detail/${imageId}?category=${category}`); //습의 시간 가지기!
    } else if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/board')) {
      navigate(`/mypage/board/${boardText}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/newpost')) {
      navigate(`/mypage/newpost/detail/${imageId}`);
    } else if (location.pathname.includes('/newpost/board')) {
      navigate(`/mypage/newpost/board/${boardText}/detail/${imageId}`);
    }
  };

  return (
    <Masonry
      elementType="ul"
      className={`min-w-[320px] max-w-screen-md h-auto bg-white ${margin} px-4 mx-auto relative`}
      options={{
        gutter: 15,
        horizontalOrder: true,
        itemSelector: '.masonry-item',
        transitionDuration: 0,
        fitWidth: true,
      }}
    >
      {data.map((item) => (
        <motion.li key={item.id} layoutId={item.id} className="masonry-item absolute">
          <button type="button" onClick={() => onBoxClicked(item.id)}>
            <img
              src={item.image}
              alt={item.alt}
              className={`w-[150px] xs:w-[180px] bg-gray-100 rounded-2xl mb-[15px] cursor-zoom-in`}
              style={{ height: `${item.height}px` }}
            />
          </button>
        </motion.li>
      ))}
    </Masonry>
  );
};

export default ImageTemplate;
