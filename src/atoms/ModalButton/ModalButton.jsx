const ModalButton = ({ href, onClick, fileName, buttonText }) => {
  return (
    <li className="list-none place-content-center">
      <a href={href} onClick={onClick}>
        <div className="flex flex-col justify-center items-center">
          <img src={`/images/${fileName}.svg`} alt="" className="w-[45px] h-[45px]" />
          <p className="mt-5 text-xs xs:text-sm">{buttonText}</p>
        </div>
      </a>
    </li>
  );
};

export default ModalButton;
