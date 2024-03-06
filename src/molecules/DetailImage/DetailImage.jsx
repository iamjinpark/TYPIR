import DetailImageButton from '../../atoms/DetailImageButton/DetailImageButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const DetailImage = ({ layoutId, imageSrc }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed max-w-screen-md mx-auto inset-0 bg-black bg-opacity-80 z-20" onClick={() => navigate(-1)}>
      <motion.div
        className="w-[290px] h-[410px] xs:w-[380px] xs:h-[600px] rounded-2xl absolute top-[120px] right-[0px] left-[0px] m-auto xs:top-[120px]"
        // style={{
        //   position: 'absolute',
        //   top: 120,
        //   left: 0,
        //   right: 0,
        //   margin: '0 auto',
        // }}
        onClick={(e) => e.stopPropagation()}
        layoutId={layoutId}
      >
        <img src={imageSrc} alt="이미지 상세보기" className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute bottom-4 right-4">
          <DetailImageButton />
        </div>
      </motion.div>
    </div>
  );
};

export default DetailImage;
