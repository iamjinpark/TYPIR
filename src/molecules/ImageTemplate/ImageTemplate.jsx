import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

function ImageTemplate({ boardText, margin = 'mt-[15px]', data = images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

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

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    450: 2,
  };

  return (
    <ul className={`max-w-screen-md h-auto bg-white ${margin}`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px] px-4"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {data.map((item) => (
          <motion.li key={item.id} layoutId={item.id + ''}>
            <button type="button" onClick={() => onBoxClicked(item.id)}>
              <img
                src={item.image}
                alt={item.alt}
                className={`w-[170px] bg-gray-100 rounded-2xl mb-[15px] cursor-zoom-in`}
                style={{ height: `${item.height}px` }}
              />
            </button>
          </motion.li>
        ))}
      </Masonry>
    </ul>
  );
}
export default ImageTemplate;
