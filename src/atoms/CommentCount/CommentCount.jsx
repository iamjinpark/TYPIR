const HeartCount = ({ count }) => {
  return (
    <p className="text-xs">
      댓글
      <span className="font-semibold ml-1">{count}</span>
      개
    </p>
  );
};

export default HeartCount;