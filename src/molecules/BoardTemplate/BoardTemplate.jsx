import TextContents from '@/atoms/TextContents/TextContents';
import images from '/src/data/images.json';

function BoardItem({ content, span }) {
  const width = span ? 'calc(47px * 2)' : '47px';
  const itemHeight = span ? 'calc(47px * 2)' : '47px';

  return <div className={`w-[${width}] h-[${itemHeight}] bg-gray-100 ${span}`}>{content}</div>;
}

function BoardTemplate({ text, onBoardClick }) {
  return (
    <div>
      <TextContents text={text} fontFamily="font-serif" fontWeight="font-bold" fontSize="text-[18px]" padding="p-2" />
      <div className="w-[280px] h-[170px] rounded-2xl overflow-hidden" onClick={() => onBoardClick(text.toLowerCase())}>
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1px">
          {images.slice(0, 3).map((image, index) => (
            <BoardItem key={image.id} {...image} span={index === 0 ? 'col-span-2 row-span-2' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoardTemplate;
