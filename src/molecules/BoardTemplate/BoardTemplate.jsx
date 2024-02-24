import images from '/src/data/images.json';

function BoardItem({ content, span }) {
  const width = span ? 'calc(47px * 2)' : '47px';
  const itemHeight = span ? 'calc(47px * 2)' : '47px';

  return <div className={`w-[${width}] h-[${itemHeight}] bg-gray-100 ${span}`}>{content}</div>;
}

function BoardTemplate() {
  return (
    <div className="w-[280px] h-[180px] rounded-xl overflow-hidden">
      <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
        {images.slice(0, 3).map((image, index) => (
          <BoardItem key={image.id} {...image} span={index === 0 ? 'col-span-2 row-span-2' : ''} />
        ))}
      </div>
    </div>
  );
}

export default BoardTemplate;
