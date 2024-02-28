import { useState } from "react";

const CommentWindow = ({ onAddComment }) => {
  const [text, setText] = useState("")

  const handleInputChange = e => {
    setText(e.target.value)
  }

  const handleEnterPress = e => {
    if (e.key === "Enter") {
      handleAddText();
    }
  }
  
  const handleAddText = () => {
    if (text.trim() !== "") {
      const newText = {
        userName: "dannxnni",  // 받아오기
        text: text,
        daysAgo: '방금 전'
      };
      onAddComment(newText)
      setText("")
    }
  }


  return (
    <div className="fixed bottom-0 h-[64px] w-full bg-white flex items-center">
      <img src="/images/profile.svg" className="w-[35px] h-[35xpx]"/>
      <input 
        type="text" 
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        className="w-[240px] h-[33px] bg-[#FAFAFA] placeholder-[#B9B9B9] ml-3 rounded-3xl pl-3 outline-none text-sm" 
        placeholder="댓글을 남기세요"
      />
    </div>
  );
};

export default CommentWindow;