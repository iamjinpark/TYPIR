import BookmarkButton from "@/atoms/BookmarkButton/BookmarkButton";
import CommentCount from "@/atoms/CommentCount/CommentCount";
import HeartButton from "@/atoms/HeartButton/HeartButton";
import HeartCount from "@/atoms/HeartCount/HeartCount";
import TextContents from "@/atoms/TextContents/TextContents";
import Comment from "@/molecules/Comment/Comment";
import CommentWindow from "@/molecules/CommentWindow/CommentWindow";
import Header from "@/molecules/Header/Header";
import Profile from "@/molecules/Profile/Profile";
import { useEffect, useState } from "react";

const CommunityDetail = ({ count = 3 }) => {
  const [likeCount, setLikeCount] = useState(() => {
    const savedCount = localStorage.getItem("likeCount")
    return savedCount ? parseInt(savedCount) : count;
  })

  const [comment, setComment] = useState(() => {
    const savedComment = localStorage.getItem("comments")
  
    return (savedComment) ? JSON.parse(savedComment) : [];
  })

  const handleLikeChange = (change) => {
    setLikeCount((prevCount) => prevCount + change)
  };


  // const handleAddComment = (newComment) => {
  //   const updatedComment = [...comment, {...newComment, time: new Date()}]
  //   setComment(updatedComment)
  //   localStorage.setItem("comments", JSON.stringify(updatedComment))
  // }

  const handleAddComment = (newComment) => {
    const updatedComment = [...comment, newComment]
    setComment(updatedComment)
    localStorage.setItem("comments", JSON.stringify(updatedComment))
  }

  useEffect(() => {
    localStorage.setItem("likeCount", likeCount.toString())
  }, [likeCount])

  return (
    <div className="w-[320px] mx-auto">
      <Header />
      <Profile />
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
        <Comment onAddComment={handleAddComment} key={index} userName={comment.userName} text={comment.text} time={comment.time}/>
      ))}
      <CommentWindow onAddComment={handleAddComment} />
      </div>
      <div className="w-[320px] h-[55px]"></div>
    </div>
  );
  };

export default CommunityDetail;