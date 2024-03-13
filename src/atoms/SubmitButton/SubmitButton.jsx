const SubmitButton = ({ isFormValid, text = '로그인', width = 'w-72', className, style }) => {
  return (
    <button
      type="submit"
      disabled={!isFormValid}
      className={`${className} ${width} h-11 block rounded-2xl px-4 text-[15px] text-white font-bold ${isFormValid ? 'bg-black' : 'bg-gray-400'}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
