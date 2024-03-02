import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function ImageTemplate() {
  const navigate = useNavigate();
  const location = useLocation();

  const onBoxClicked = (imageId) => {
    if (location.pathname.endsWith('/category')) {
      navigate(`/category/detail/${imageId}`);
    } else if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.includes('/newpost')) {
      navigate(`/mypage/newpost/detail/${imageId}`);
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    500: 2,
  };

  return (
    <div className="max-w-screen-md h-auto bg-white">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px]"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {images.map((item) => (
          <motion.div
            key={item.id}
            className={`w-[170px] bg-gray-100 rounded-2xl mb-[15px] cursor-zoom-in`}
            style={{ height: `${item.height}px` }}
            onClick={() => onBoxClicked(item.id)}
            layoutId={item.id + ''}
          >
            {item.content}
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}
export default ImageTemplate;
