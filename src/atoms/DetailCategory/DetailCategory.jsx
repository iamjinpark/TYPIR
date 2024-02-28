const DetailCategoryButton = ({ text = '버튼' }) => {
  return (
    <button className="w-[290px] h-[30px] text-gray-300 text-[15px] hover:text-[20px] hover:text-black hover:font-bold">
      {text}
    </button>
  );
};

export default DetailCategoryButton;
