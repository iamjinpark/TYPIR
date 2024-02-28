import DetailImageButton from '../DetailImageButton/DetailImageButton';

const DetailImage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black/80">
      <div className="relative w-[18.125rem] h-[25.625rem] md:w-[22rem] md:h-[32rem] bg-gray-300 rounded-2xl">
        <div className="absolute bottom-4 right-4">
          <DetailImageButton />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
