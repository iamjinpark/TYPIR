import TextContents from '@/atoms/TextContents/TextContents';

function BoardItem({ imageSrc, zIndex, translateX }) {
  return (
    <div
      className="bg-gray-100 w-[120px] h-[170px] overflow-hidden rounded-2xl absolute border border-white"
      style={{ transform: `translateX(${translateX}px)`, zIndex: zIndex }}
    >
      <img src={imageSrc} className="w-full h-full object-cover" />
    </div>
  );
}

function OverlapTemplate({ text, images, onClick }) {
  return (
    <div>
      <TextContents
        text={text}
        fontFamily="font-serif"
        fontWeight="font-bold"
        fontSize="text-[18px]"
        padding="p-2"
        margin="mt-2"
      />
      <div className="w-[280px] relative" onClick={onClick}>
        {images.slice(0, 5).map(({ id, postImageUrl }, index) => (
          <BoardItem key={id} imageSrc={postImageUrl} zIndex={5 - index} translateX={index * 40} />
        ))}
      </div>
    </div>
  );
}

export default OverlapTemplate;
