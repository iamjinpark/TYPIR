const Comment = ({ userName, text, daysAgo }) => {
  return (
    <div className="comment flex items-center">
      <img src="/images/profile.svg" className="w-[40px] h-[40px]"/>
      <div className="ml-3 ">
        <span className="username font-bold">{userName}</span>
        <span className="comment_text ml-3">{text}</span>
        <div className="flex gap-3 text-[#909090]">
          <p className="days_ago">{daysAgo}</p>
          <a>답글쓰기</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;