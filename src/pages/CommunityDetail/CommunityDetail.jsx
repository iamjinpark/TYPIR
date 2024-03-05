import BookmarkButton from "@/atoms/BookmarkButton/BookmarkButton";
import CommentCount from "@/atoms/CommentCount/CommentCount";
import HeartButton from "@/atoms/HeartButton/HeartButton";
import HeartCount from "@/atoms/HeartCount/HeartCount";
import TextContents from "@/atoms/TextContents/TextContents";
import Comment from "@/molecules/Comment/Comment";
import CommentWindow from "@/molecules/CommentWindow/CommentWindow";
import Profile from "@/molecules/Profile/Profile";
import { useEffect, useState } from "react";

const CommunityDetail = ({ count = 3 }) => {
  const [likeCount, setLikeCount] = useState(() => {
    const savedCount = localStorage.getItem("likeCount")
    return savedCount ? parseInt(savedCount) : count;
  });

  const [comment, setComment] = useState(() => {
    const savedComment = localStorage.getItem("comments");
    return savedComment ? JSON.parse(savedComment) : [];
  });

  const handleLikeChange = (change) => {
    setLikeCount((prevCount) => prevCount + change);
  };

  const handleAddComment = (newComment) => {
    const updatedComment = [...comment, newComment];
    setComment(updatedComment);
    localStorage.setItem("comments", JSON.stringify(updatedComment));
  };

  useEffect(() => {
    localStorage.setItem("likeCount", likeCount.toString());
  }, [likeCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  return (
    <>
      {isMobile ? (
        <div className="w-[320px] mx-auto relative">
          <Profile />
          <div className="px-[15px] mt-[10px]">
            <img src="/images/sampleImg.png"/>  {/* DB에서 뿌릴 이미지 */}
            <div className="flex justify-between my-[10px]">
              <HeartButton onClick={(change) => handleLikeChange(change)} />
              <BookmarkButton />
            </div>
            <div className="flex justify-between mb-[10px]">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <TextContents fontSize="14" text="this is content this is content✨"/>
            <div className="overflow-y-auto max-h-[160px]">
              <div className="w-full h-px bg-[#C4C4C4] my-[10px]"></div>
              {comment.map((comment, index) => (
                <Comment onAddComment={handleAddComment} key={index} userName={comment.userName} text={comment.text} time={comment.time}/>
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} />
          </div>
          <div className="w-[320px] h-[55px]"></div>
        </div>
      ) : (
        <div className="flex gap-3 w-[100%] sm:w-[768px] h-[480px] justify-center items-center mt-5">
          <div className="w-[100%] sm:w-[350px] h-[480px] flex items-center justify-center ">
            <img className="rounded-l-2xl w-full h-full" src="/images/test2.jpg" /> {/*DB에서 뿌릴 이미지*/}
          </div>
          <div className="w-[100%] sm:w-[350px] h-[480px] relative flex flex-col">
            <Profile />
            <div className="px-[15px] my-[30px] w-[100%] sm:w-[350px] h-[90px]">
              <TextContents text="this is content this is content this is content ✨" />{" "}
              {/* DB에서 뿌릴 텍스트 */}
            </div>
            <div className="flex justify-between mx-[15px]">
              <HeartButton onClick={(val) => handleLikeChange(val)} />
              <BookmarkButton />
            </div>
            <div className="flex justify-between mx-15px my-2">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <div className="h-px bg-[#C4C4C4] mx-[15px] my-[10px]"></div>
            <div className="overflow-y-auto max-h-[160px]">
              {comment.map((comment, index) => (
                <Comment
                  onAddComment={handleAddComment}
                  key={index}
                  userName={comment.userName}
                  text={comment.text}
                  time={comment.time}
                />
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} />
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityDetail;
