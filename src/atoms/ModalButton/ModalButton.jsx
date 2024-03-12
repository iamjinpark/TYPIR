const ModalButton = ({ href, onClick, fileName, buttonText }) => {
  return (
    <li className="list-none place-content-center">
        <button href={href} onClick={onClick} className="flex flex-col justify-center items-center">
          <img src={`/images/${fileName}.svg`} alt="" className="w-[40px] h-[40px]" />
          <p className="mt-5 text-xs xs:text-sm">{buttonText}</p>
        </button>
    </li>
  );
};

export default ModalButton;
