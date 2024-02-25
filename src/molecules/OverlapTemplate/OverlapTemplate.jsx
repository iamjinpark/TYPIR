import TextContents from '@/atoms/TextContents/TextContents';
import images from '/src/data/images.json';

function BoardItem({ content, zIndex, translateX }) {
  return (
    <div
      className="bg-gray-100 w-[120px] h-[170px] overflow-hidden rounded-2xl absolute border border-white"
      style={{ transform: `translateX(${translateX}px)`, zIndex: zIndex }}
    >
      {content}
    </div>
  );
}

function OverlapTemplate({ text }) {
  return (
    <div>
      <TextContents text={text} fontFamily="font-serif" fontWeight="font-bold" fontSize="text-[18px]" padding="p-2" />
      <div className="w-[280px] relative">
        {images.slice(0, 5).map((image, index) => (
          <BoardItem key={image.id} {...image} zIndex={5 - index} translateX={index * 40} />
        ))}
      </div>
    </div>
  );
}

export default OverlapTemplate;
