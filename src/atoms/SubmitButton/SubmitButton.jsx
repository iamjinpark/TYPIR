const SubmitButton = ({ isFormValid, text = '로그인', width = 'w-72', className }) => {
  return (
    <button
      type="submit"
      disabled={!isFormValid}
      className={`${className} ${width} h-11 block rounded-2xl px-4 text-white font-bold ${isFormValid ? 'bg-black' : 'bg-gray-400'}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
