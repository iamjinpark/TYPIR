import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useImageStore } from '@/zustand/useStore';
import TextContents from '@/atoms/TextContents/TextContents';

function MyImageTemplate({ images }) {
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedImageUrl = useImageStore((state) => state.setSelectedImageUrl);

  const onBoxClicked = (imageId, imageUrl, category) => {
    // if (location.pathname.startsWith('/mypage/post')) {
    //   navigate(`/mypage/post/${category}/detail/${imageId}`);
    // }
    if (location.pathname.startsWith('/mypage/post')) {
      navigate(`/community/detail`);
    }
    setSelectedImageUrl(imageUrl);
  };

  const breakpointColumnsObj = {
    default: 4,
    639: 3,
    450: 2,
  };

  return (
    <ul className={`max-w-screen-md h-auto min-h-[600px] bg-white`}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[12px]"
        columnClassName="my-masonry-grid_column min-w-[170px] flex flex-col items-center"
      >
        {images.map(({ id, imageUrl, title, category }, index) => (
          <motion.li key={id} layoutId={id} className="h-[350px]">
            <img
              src={imageUrl}
              className="w-[170px] h-[270px] bg-gray-100 rounded-2xl cursor-zoom-in object-cover"
              onClick={() => onBoxClicked(id, imageUrl, category)}
            />
            <TextContents
              text={title}
              maxLength={25}
              fontFamily="font-serif"
              fontWeight="font-bold"
              fontSize="text-[18px]"
              padding="p-2"
              margin="mb-4"
              style={{
                width: '170px',
                textAlign: 'center',
              }}
            />
          </motion.li>
        ))}
      </Masonry>
    </ul>
  );
}
export default MyImageTemplate;
