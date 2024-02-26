const SubmitButton = ({ isFormValid, content = '로그인' }) => {
  return (
    <button
      type="submit"
      disabled={!isFormValid}
      className={`w-72 h-11 mt-1 block rounded-2xl px-4 text-white font-bold ${isFormValid ? 'bg-black' : 'bg-gray-400'}`}
    >
      {content}
    </button>
  );
};

export default SubmitButton;
