const BookmarkList = ({ title, onClick }) => {
  return (
    <button className="font-semibold flex items-center mb-4" aria-label={title} onClick={onClick}>
      <img src="/images/addBookmark.svg" className="w-[40px] h-[40px] mr-3" alt="저장하기" />
      {title}
    </button>
  );
};

export default BookmarkList;
