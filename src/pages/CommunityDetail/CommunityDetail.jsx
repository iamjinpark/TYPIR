import pb from '@/api/pocketbase';
import BookmarkButton from '@/atoms/BookmarkButton/BookmarkButton';
import CommentCount from '@/atoms/CommentCount/CommentCount';
import HeartButton from '@/atoms/HeartButton/HeartButton';
import HeartCount from '@/atoms/HeartCount/HeartCount';
import TextContents from '@/atoms/TextContents/TextContents';
import Comment from '@/molecules/Comment/Comment';
import CommentWindow from '@/molecules/CommentWindow/CommentWindow';
import DetailImageFile from '@/molecules/DetailImageFile/DetailImageFile';
import Profile from '@/molecules/Profile/Profile';
import { getPbImage } from '@/utils';
import { useAlbumStore } from '@/zustand/useStore';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const location = useLocation();
  const { imageSrc, postImageSrc, writerInfo } = location.state || {};
  const context = location.state?.context;
  
  const path = location.pathname
  const imageId = path.split("/").pop() // 이미지 아이디 추출 방식 변경

  const USERS_COLLECTION_ID = '_pb_users_auth_';

  const [comment, setComment] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState('');

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const [writerData, setWriterData] = useState(null);

  useEffect(() => {
    const userDataJSON = localStorage.getItem('user');
  
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);

      setUser({
        profile: userData.profile,
        userName: userData.username,
        userId: userData.id,
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      setProfileImage(`https://pocket10.kro.kr/api/files/${USERS_COLLECTION_ID}/${user.userId}/${user.profile}`);
    }
  }, [user]);

  // 댓글
  useEffect(() => {
    const allComments = JSON.parse(localStorage.getItem('comment') || '{}');

    setComment(allComments[imageId] || []);
  }, [imageId]);

  const handleAddComment = (newComment) => {
    const allComments = JSON.parse(localStorage.getItem('comment') || '{}');
    const imageComment = allComments[imageId] || [];
    const updatedComment = [...imageComment, newComment];

    allComments[imageId] = updatedComment;
    localStorage.setItem('comment', JSON.stringify(allComments));
    setComment(updatedComment);
  };

  // 좋아요
  useEffect(() => {
    const allLikes = JSON.parse(localStorage.getItem('like') || '{}');

    setLikeCount(allLikes[imageId] || 0);
  }, [imageId]);

  const handleLikeChange = (change) => {
    setLikeCount((prev) => {
      const newCount = Math.max(prev + change, 0);
      const allLikes = JSON.parse(localStorage.getItem('like') || '{}');

      allLikes[imageId] = newCount;
      localStorage.setItem('like', JSON.stringify(allLikes));

      return newCount;
    });
  };

  // 화면 사이즈
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 게시글 작성자 정보 얻어오기 /* 다은님거 */
  // useEffect(() => {
  //   async function fetchWriterData() {
  //     if (writerInfo) {
  //       const userRecord = await pb.collection('users').getOne(writerInfo);
  //       const profileImageURL = getPbImage({
  //         collectionId: 'users',
  //         id: userRecord.id,
  //         image: userRecord.profile,
  //       });
  //       setWriterData({
  //         username: userRecord.username,
  //         profile: profileImageURL,
  //       });
  //     }
  //   }
  //   fetchWriterData();
  // }, [writerInfo]);

  useEffect(() => {
    async function fetchWriterData() {
      if (writerInfo) {
        try {
          const userRecord = await pb.collection('users').getOne(writerInfo);
          if (userRecord) {
            const profileImageURL = getPbImage({
              collectionId: 'users',
              id: userRecord.id,
              image: userRecord.profile,
            });
            setWriterData({
              username: userRecord.username,
              profile: profileImageURL,
            });
          }
        } catch (error) {
          console.error('Error fetching writer data:', error);
        }
      }
    }
    fetchWriterData();
  }, [writerInfo]);

  return (
    <>
      {isMobile ? (
        <div className="w-[320px] mx-auto relative mb-5">
          <Profile writerProfile={writerData?.profile} writerName={writerData?.username} writerId={writerInfo} />
          <div className="px-[15px] mt-[10px]">
            <div className="relative">
              <img src={postImageSrc} className="min-h-[430px] object-cover" />
              <div className="w-full absolute bottom-0 right-0">
                <DetailImageFile imageSrc={imageSrc} />
              </div>
            </div>
            <div className="flex justify-between my-[10px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange} />
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
            <CommentWindow onAddComment={handleAddComment} profileImage={profileImage} userData={user} />
          </div>
          <div className="w-[320px] h-[55px]"></div>
        </div>
      ) : (
        <div className="flex gap-3 w-[100%] sm:w-[768px] h-[480px] justify-center items-center mt-5">
          <div className="w-[100%] sm:w-[350px] h-[480px] flex items-center justify-center relative">
            <img src={postImageSrc} className="rounded-l-2xl w-full h-full object-cover" />
            <div className="w-full absolute bottom-0 right-0">
              <DetailImageFile imageSrc={imageSrc} />
            </div>
          </div>

          <div className="w-[100%] sm:w-[350px] h-[480px] relative flex flex-col">
            <Profile writerProfile={writerData?.profile} writerName={writerData?.username} writerId={writerInfo} />
            <div className="px-[15px] my-[30px] w-[100%] sm:w-[350px] h-[110px]">
              <TextContents text={context} />
            </div>
            <div className="flex justify-between mx-[15px]">
              <HeartButton imageId={imageId} onClick={handleLikeChange} />
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
            <CommentWindow
              onAddComment={handleAddComment}
              imageId={imageId}
              profileImage={profileImage}
              userData={user}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityDetail;
