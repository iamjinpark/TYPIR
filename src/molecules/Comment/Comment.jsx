const Comment = () => {
  return (
    <div className="comment flex items-center">
      <img src="/public/profile/profile.svg" className="w-[40px] h-[40px]"/>
      <div className="ml-3 ">
        <span className="username font-bold">dannxnni</span>
        <span className="comment_text ml-3">정보 좀요</span>
        <div className="flex gap-3 text-[#909090]">
          <p className="days_ago">3일전</p>
          <a>답글쓰기</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;