import Masonry from 'react-masonry-component';
import images from '/src/data/images.json';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = ({ boardText, margin = 'mt-[15px]', data = images, layoutId }) => {
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
    defalut: 4,
    639: 3,
    450: 2,
  };

  const options = {
    gutter: 17,
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 768: 4, 639: 3, 450: 2 }}>
      <Masonry
        className={`mix-w-[320px] max-w-screen-md h-auto bg-white ${margin} px-4 relative`}
        elementType={'ul'}
        options={options}
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
    </ResponsiveMasonry>
  );
};

export default Gallery;
