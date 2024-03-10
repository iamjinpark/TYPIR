import { fetchUserProfile } from "@/utils/fetchUserProfile";
import { useEffect, useState } from "react";

const CommentWindow = ({ onAddComment, imageId }) => {
  const [text, setText] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function loadUserProfile() {
      const profile = await fetchUserProfile()
      setUser(profile)
      console.log("profile : ", profile)
    }
    loadUserProfile()
  }, [])

  const handleInputChange = e => {
    setText(e.target.value)
  }

  const handleEnterPress = e => {
    if (e.key === "Enter" && text.trim() !== "") {
      const newComment = {
        userName : "User",
        text: text,
        time: new Date().toISOString(),
      }
      onAddComment(newComment, imageId)
      setText("")
    }
  }

  return (
    <div className="absolute bottom-0 w-[320px] h-[54px] bg-white flex items-center mx-0 sm:mx-[15px]">
      {/* <img src="/images/profile.svg" className="w-[35px] h-[35xpx] "/> */}
      {/* {user && <img src={user.}/>} */}
      <input 
        type="text" 
        value={text}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        className="w-[240px] h-[33px] bg-[#FAFAFA] placeholder-[#B9B9B9] ml-3 rounded-3xl pl-3 outline-none text-sm" 
        placeholder="댓글을 남기세요"/>
    </div>
  )
}

export default CommentWindow;