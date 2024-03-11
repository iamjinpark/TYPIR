import TimeForToday from "@/atoms/TimeForToday/TimeForToday";

const Comment = ({ userData, profileImage ,text, time }) => {
  return (
    <div className="flex items-center mb-[10px] mx-0 sm:mx-[15px]">
      <img src={profileImage} className="w-[30px] h-[30px] rounded-full"/>
      <div className="ml-3">
        <span className="font-bold text-sm">{userData.userName}</span>
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
