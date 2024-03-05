import TimeForToday from "@/atoms/TimeForToday/TimeForToday";

const Comment = ({ userName, text, time }) => {
  console.log(time)
  return (
    <div className="flex items-center mb-[10px] mx-0 sm:mx-[15px]">
      <img src="/images/profile.svg" className="w-[35px] h-[35px]"/>
      <div className="ml-3">
        <span className="font-bold text-sm">{userName}</span>
        <span className="ml-3 text-sm">{text}</span>
        <div className="flex gap-3 text-[#909090]">
          {/* <p className="text-xs">
            {time}
          </p> */}
          <TimeForToday time={time} />
          <a className="text-xs">답글쓰기</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
