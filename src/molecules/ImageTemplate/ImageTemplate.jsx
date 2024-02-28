import Masonry from 'react-masonry-css';
import images from '/src/data/images.json';

function ImageTemplate() {
  const breakpointColumnsObj = {
    default: 4,
    650: 3,
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
          <div
            key={item.id}
            className={`w-[170px] bg-gray-100 rounded-2xl mb-[15px]`}
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
