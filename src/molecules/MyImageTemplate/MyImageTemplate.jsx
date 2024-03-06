import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useImageStore } from '@/zustand/useStore';

function MyImageTemplate({ boardText, margin, images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedImageUrl = useImageStore((state) => state.setSelectedImageUrl);

  const onBoxClicked = (imageId, imageUrl) => {
    if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/board')) {
      navigate(`/mypage/board/${boardText}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/newpost')) {
      navigate(`/mypage/newpost/detail/${imageId}`);
    } else if (location.pathname.includes('/newpost/board')) {
      navigate(`/mypage/newpost/board/${boardText}/detail/${imageId}`);
    }
    setSelectedImageUrl(imageUrl);
  };

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    450: 2,
  };

  return (
    <ul className={`max-w-screen-md h-auto bg-white ${margin}`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px]"
        columnClassName="my-masonry-grid_column min-w-[170px] flex flex-col items-center"
      >
        {images.map(({ id, imageUrl }, index) => (
          <motion.li key={id} layoutId={id}>
            <img
              src={imageUrl}
              className="w-[170px] bg-gray-100 rounded-2xl mb-[15px] cursor-zoom-in"
              onClick={() => onBoxClicked(id, imageUrl)}
            />
          </motion.li>
        ))}
      </Masonry>
    </ul>
  );
}
export default MyImageTemplate;
