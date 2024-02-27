const SubmitButton = ({ isFormValid, text = '로그인', width = 'w-72' }) => {
  return (
    <button
      type="submit"
      disabled={!isFormValid}
      className={`${width} h-11 mt-1 block rounded-2xl px-4 text-white font-bold ${isFormValid ? 'bg-black' : 'bg-gray-400'}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
