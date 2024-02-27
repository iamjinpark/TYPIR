const BookmarkList = ({ title }) => {
  return (
      <li className="flex items-center mb-4">
        <img src="/public/profile/profile.svg" className="w-[40px] h-[40px] mr-3" alt="프로필 이미지"/>
      <button className="font-semibold">{title}</button>
    </li> 
  );
};

export default BookmarkList;