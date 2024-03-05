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
        className="w-[290px] h-[410px] xs:w-[392px] xs:h-[552px] rounded-2xl"
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          right: 0,
          margin: '0 auto',
        }}
        onClick={(e) => e.stopPropagation()}
        layoutId={layoutId}
      >
        <img src={imageSrc} alt="Detailed View" className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute bottom-4 right-4">
          <DetailImageButton />
        </div>
      </motion.div>
    </div>
  );
};

export default DetailImage;
