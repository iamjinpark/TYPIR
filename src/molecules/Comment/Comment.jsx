const Comment = ({ userName, text, daysAgo="방금 전" }) => {
  return (
    <div className="flex items-center mb-[10px]">
      <img src="/images/profile.svg" className="w-[35px] h-[35px]"/>
      <div className="ml-3 text-sm">
        <span className="font-bold">{userName}</span>
        <span className="ml-3">{text}</span>
        <div className="flex gap-3 text-[#909090]">
          <p className="">{daysAgo}</p>
          <a>답글쓰기</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;