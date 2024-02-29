import BookmarkButton from "@/atoms/BookmarkButton/BookmarkButton";
import CommentCount from "@/atoms/CommentCount/CommentCount";
import HeartButton from "@/atoms/HeartButton/HeartButton";
import HeartCount from "@/atoms/HeartCount/HeartCount";
import TextContents from "@/atoms/TextContents/TextContents";
import Comment from "@/molecules/Comment/Comment";
import CommentWindow from "@/molecules/CommentWindow/CommentWindow";
import Header from "@/molecules/Header/Header";
import { useState } from "react";

const CommunityDetail = ({ count = 3 }) => {
  const [likeCount, setLikeCount] = useState(count)
  const [comment, setComment] = useState([]);

  const handleLikeChange = (change) => {
    setLikeCount((prevCount) => prevCount + change)
  };

  const handleAddComment = (newComment) => {
    setComment((prevComments) => [...prevComments, newComment])
  };

  return (
    <div className="w-[320px] mx-auto">
      <Header />
      <div className="px-[15px] mt-[10px]">
        <img src="/images/sampleImg.png"/>  {/* DB에서 뿌릴 이미지 */}
        <div className="flex justify-between my-[5px]">
          <HeartButton onClick={(change) => handleLikeChange(change)} />
          <BookmarkButton />
        </div>
        <div className="flex justify-between mb-[5px]">
          <HeartCount count={likeCount} />
          <CommentCount count={comment.length} />
        </div>
        <TextContents fontSize="14" text="this is content this is content this is content this is content this is content this is content this is content this is content this is content this is content this is content this is content ✨"/>
        <div className="w-full h-px bg-[#C4C4C4] my-[10px]"></div>
        {comment.map((comment, index) => (
          <Comment key={index} userName={comment.userName} text={comment.text} daysAgo={comment.daysAgo}/>
        ))}
        <CommentWindow onAddComment={handleAddComment} />
      </div>
    </div>
  );
};

export default CommunityDetail;