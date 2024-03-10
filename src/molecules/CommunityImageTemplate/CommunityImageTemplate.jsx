import images from '/src/data/images.json';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function CommunityImageTemplate({ boardText, margin = 'mt-[15px]', data = images }) {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("data : ", data)

  const onBoxClicked = (imageId) => {

    if (location.pathname.endsWith('/category')) {
      navigate(`/category/detail/${imageId}`);
    } else if (location.pathname.endsWith('/mypage')) {
      navigate(`/mypage/detail/${imageId}`);
    } else if (location.pathname.startsWith('/mypage/board')) {
      navigate(`/mypage/board/${boardText}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/newpost')) {
      navigate(`/mypage/newpost/detail/${imageId}`);
    } else if (location.pathname.includes('/newpost/board')) {
      navigate(`/mypage/newpost/board/${boardText}/detail/${imageId}`);
    } else if (location.pathname.endsWith('/community')) {
      console.log(`Navigating to post with ID: ${imageId}`)
      navigate(`/community/detail/${imageId}`)
    }

  };

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    500: 2,
  };

  return (
    <ul className={`max-w-screen-md h-auto bg-white ${margin}`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px]"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {data.map((item) => (
          <motion.li key={item.id} layoutId={item.id + ''} >
            <div className='mb-[15px] flex flex-col justify-center items-center'>
              <img
                src={item.image}
                alt={item.alt}
                className={`w-[200px] h-[270px] object-cover bg-gray-100 rounded-2xl cursor-zoom-in`}
                style={{ height: `${item.height}px` }}
                onClick={() => onBoxClicked(item.id)}
              />

              <p className='w-[170px] text-center my-1 truncate font-serif'>{item.title}</p>
            </div>
          </motion.li>
        ))}
      </Masonry>
    </ul>
  );
}
export default CommunityImageTemplate;
