import pb from '@/api/pocketbase';
import BookmarkButton from '@/atoms/BookmarkButton/BookmarkButton';
import CommentCount from '@/atoms/CommentCount/CommentCount';
import HeartButton from '@/atoms/HeartButton/HeartButton';
import HeartCount from '@/atoms/HeartCount/HeartCount';
import TextContents from '@/atoms/TextContents/TextContents';
import Comment from '@/molecules/Comment/Comment';
import CommentWindow from '@/molecules/CommentWindow/CommentWindow';
import Profile from '@/molecules/Profile/Profile';
import { getPbImage } from '@/utils';
import { fetchCommunityData } from '@/utils/\bfetchCommunityData';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const location = useLocation();
  const imageSrc = location.state?.imageSrc;
  const context = location.state?.context;
  const imageId = location.state?.imageId
  const writerInfo = location.state?.writerInfo

  console.log("location : ", location)
  console.log("imageSrc : ", imageSrc)
  console.log("context : ", context)
  console.log("imageId : ", imageId)

  console.log("작성자 정보 좀 불러와라,, : ", writerInfo)
  console.log("작성자 프로필 : ", writerInfo?.profile)

  const [comment, setComment] = useState([])
  const [likeCount, setLikeCount] = useState(0)

  const [user, setUser] = useState(null)
  const [profileImage, setProfileImage] = useState("")
  // console.log("커뮤니티디테일유저 : ", user)

  useEffect(() => {
    const userDataJSON = localStorage.getItem("user")
    
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON)
      
      setUser({
        profile : userData.profile,
        userName : userData.userName,
        userId : userData.id
      })
    }
  }, [])

  useEffect(() => {
    if (user) {
      setProfileImage(`https://pocket10.kro.kr/api/files/_pb_users_auth_/${user.userId}/${user.profile}`)
    }
  }, [user])
  // console.log("profileImage : ", profileImage)

  // 댓글 & 좋아요
  useEffect(() => {
    const allComments = JSON.parse(localStorage.getItem("comment") || "{}")
    const allLikes = JSON.parse(localStorage.getItem("like") || "{}")

    // 댓글
    if (allComments[imageId]) {
      setComment(allComments[imageId])
    } else {
      setComment([])
    }

    // 좋아요
    if (allLikes[imageId]) {
      setLikeCount(allLikes[imageId])
    } else {
      setLikeCount(0)
    }
  }, [imageId])

  // 댓글 추가
  const handleAddComment = newComment => {
    const allComments = JSON.parse(localStorage.getItem("comment") || "{}")
    const imageComment = allComments[imageId] || []
    const updatedComment = [...imageComment, newComment]

    allComments[imageId] = updatedComment
    localStorage.setItem("comment", JSON.stringify(allComments))
    setComment(updatedComment)
  }
  
  const handleLikeChange = (change, imageId) => {
    // console.log("handleLikeChange")
    setLikeCount(prev => {
      const allLikes = JSON.parse(localStorage.getItem("like") || "{}")
      const count = (allLikes[imageId] || 0) + change 
      
      allLikes[imageId] = Math.max(0, count)

      return allLikes[imageId]
    })
    const localStorageKey = `isClickedHeart_${imageId}`
    const isClickedHeart = change > 0
    localStorage.setItem(localStorageKey, JSON.stringify(isClickedHeart))
  }

  useEffect(() => {
    const allLikes = JSON.parse(localStorage.getItem("like") || "{}")
    allLikes[imageId] = likeCount
    localStorage.setItem("like", JSON.stringify(allLikes))
  }, [likeCount, imageId])


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [writerData, setWriterData] = useState(null)

  useEffect(() => {
    async function fetchWriterData () {
      if (writerInfo) {
        try {
          const userRecord = await pb.collection("users").getOne(writerInfo)
          const profileImageURL = getPbImage({
            collectionId : "users",
            id : userRecord.id,
            image : userRecord.profile
          })
          setWriterData({
            username : userRecord.username,
            profile : profileImageURL
          })
        } catch (err) {
          console.error("실패 : ", err)
        }
      }
    }
    fetchWriterData()
  }, [writerInfo])

  return (
    <>
      {isMobile ? (
        <div className="w-[320px] mx-auto relative">
          {/* <Profile writerImg={writerImg} writerName={writerName}/> */}
          <Profile writerProfile={writerData?.profile} writerName={writerData?.username} />
          <div className="px-[15px] mt-[10px]">
            {/* <img src="/images/sampleImg.png"/>   */}
            <img src={imageSrc} />
            <div className="flex justify-between my-[10px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange}/>
              <BookmarkButton />
            </div>
            <div className="flex justify-between mb-[10px]">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <TextContents text={context} />
            <div className="overflow-y-auto max-h-[160px]">
              <div className="w-full h-px bg-[#C4C4C4] my-[10px]"></div>
              {comment.map((comment, index) => (
                <Comment
                  onAddComment={handleAddComment}
                  key={index}
                  userData={user}
                  profileImage={profileImage}
                  text={comment.text}
                />
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} profileImage={profileImage} userData={user}/>
          </div>
          <div className="w-[320px] h-[55px]"></div>
        </div>
      ) : (
        <div className="flex gap-3 w-[100%] sm:w-[768px] h-[480px] justify-center items-center mt-5">
          <div className="w-[100%] sm:w-[350px] h-[480px] flex items-center justify-center ">
            <img src={imageSrc} className="rounded-l-2xl w-full h-full object-cover" /> {/*DB에서 뿌릴 이미지*/}
          </div>
          <div className="w-[100%] sm:w-[350px] h-[480px] relative flex flex-col">
          <Profile writerProfile={writerData?.profile} writerName={writerData?.username} />
            <div className="px-[15px] my-[30px] w-[100%] sm:w-[350px] h-[90px]">
              <TextContents text={context} />
              {/* DB에서 뿌릴 텍스트 */}
            </div>
            <div className="flex justify-between mx-[15px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange}/>
              <BookmarkButton />
            </div>
            <div className="flex justify-between mx-15px mt-3 ">
              <HeartCount count={likeCount} />
              <CommentCount count={comment.length} />
            </div>
            <div className="h-px bg-[#C4C4C4] mx-[15px] my-[10px]"></div>
            <div className="overflow-y-auto max-h-[160px]">
              {comment.map((comment, index) => (
                <Comment
                  onAddComment={handleAddComment}
                  key={index}
                  userData={user}
                  profileImage={profileImage}
                  text={comment.text}
                  time={comment.time}
                />
              ))}
            </div>
            <CommentWindow onAddComment={handleAddComment} imageId={imageId} profileImage={profileImage} userData={user}/>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityDetail;
