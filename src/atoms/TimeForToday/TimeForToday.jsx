import { useEffect, useState } from "react";

const TimeForToday = ({ time }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = Date.now();
      const commentTime = new Date(time).getTime(); // 댓글이 작성된 시간을 밀리초로 변환

      const timeDifference = currentTime - commentTime;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      let newTimeAgo = "";

      if (days > 0) {
        newTimeAgo = `${days}일 전`;
      } else if (hours > 0) {
        newTimeAgo = `${hours}시간 전`;
      } else if (minutes > 0) {
        newTimeAgo = `${minutes}분 전`;
      } else {
        newTimeAgo = `방금 전`;
      }

      setTimeAgo(newTimeAgo);
    };

    calculateTimeAgo(); // 처음 렌더링될 때 시간 계산

    // 1분마다 시간 갱신
    const interval = setInterval(calculateTimeAgo, 60000);

    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 interval을 정리
    return () => clearInterval(interval);
  }, [time]);

  return <p className="text-xs">{timeAgo}</p>;
};

export default TimeForToday;
