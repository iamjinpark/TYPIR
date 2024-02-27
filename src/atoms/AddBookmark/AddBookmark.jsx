const AddBookmark = () => {
  return (
    <div className=" bg-white border-t border-black h-[60px] w-full flex">
      <button className="flex items-center my-3">
        <img src="/public/bookmark/addBookmark.svg" className="w-10 h-10 ml-3"/>
        <p className="text-sm ml-3 font-semibold">나만의 북마크 만들기</p>
      </button>
    </div>
  );
};

export default AddBookmark;