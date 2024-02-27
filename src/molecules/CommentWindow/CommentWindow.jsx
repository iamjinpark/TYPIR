const CommentWindow = () => {
  return (
    <div className="w-[320px] h-[64px] bg-[#F3F3F3] border border-black flex items-center">
      <img src="/images/profile.svg" className="w-[40px] h-[40px] ml-[15px]"/>
      <input type="text" className="w-[244px] h-[33px] bg-[#D9D9D9] placeholder-[#B9B9B9] ml-3 rounded-3xl pl-3 outline-none" placeholder="댓글을 남기세요"/>
    </div>
  );
};

export default CommentWindow;