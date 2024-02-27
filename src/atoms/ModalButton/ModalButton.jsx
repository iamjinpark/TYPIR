const ModalButton = ({ href, onClick ,fileName ,buttonText }) => {
  return (
    <li className="list-none place-content-center">
      <a href={href} onClick={onClick} className="button_link">
        <div className="flex flex-col justify-center items-center">
          <img src={`/images/${fileName}.svg`} alt="" className="w-[35px] h-[35px]"/>
          <p className="button_text mt-3 font-semibold">
            {buttonText}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ModalButton;