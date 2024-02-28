import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';

function ImageTemplate() {
  const breakpointColumnsObj = {
    default: 2,
  };

  return (
    <div className="w-full h-auto bg-white">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex gap-[10px]"
        columnClassName="my-masonry-grid_column flex flex-col items-center"
      >
        {images.map((item) => (
          <div
            key={item.id}
            className={`w-full bg-gray-100 rounded-2xl mb-[15px]`}
            style={{ height: `${item.height}px` }}
          >
            {item.content}
          </div>
        ))}
      </Masonry>
    </div>
  );
}
export default ImageTemplate;
