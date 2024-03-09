import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import WriterModal from "../WriterModal/WriterModal";

const Profile = ({ userName }) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  

  return (
    <div className="relative flex items-center justify-center pt-2">
      <img src="/images/profile.svg" className="w-[45px] h-[45px] ml-[15px]"/>
      <p className="ml-3">{userName}</p>
      <button onClick={handleOpenModal} className="ml-auto mr-[15px]">
        <img src="/images/plus.svg" className="w-[18px]"/>
      </button>
        <div className="absolute z-50">
          {/* {isOpen && <UserModal onClose={handleCloseModal} />} */}
          {isOpen && <WriterModal onClose={handleCloseModal}/>}
        </div>
    </div>
  );
};

export default Profile;