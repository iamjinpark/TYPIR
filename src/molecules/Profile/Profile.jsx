import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import WriterModal from "../WriterModal/WriterModal";
import { useEffect } from "react";

const Profile = ({ writerProfile, writerName, writerId}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWriter, setIsWriter] = useState(false)

  const handleOpenModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }  

  useEffect(() => {
    const currentUserJSON = localStorage.getItem("user")
    
    if (currentUserJSON) {
      const currentUser = JSON.parse(currentUserJSON)
      
      setIsWriter(currentUser.id === writerId[0])
    }
  }, [writerId])


  return (
    <div className="relative flex items-center justify-center pt-2">
      <img src={writerProfile} className="w-[35px] h-[35px] ml-[15px] rounded-full"/>
      <p className="ml-3 text-sm font-semibold">{writerName}</p>
      <button type="button" onClick={handleOpenModal} className="ml-auto mr-[15px]">
        <img src="/images/plus.svg" className="w-[18px]"/>
      </button>
        <div className="absolute z-50">
          {isOpen && (isWriter ? <WriterModal onClose={handleCloseModal}/> : <UserModal onClose={handleCloseModal}/>)}
        </div>
    </div>
  );
};

export default Profile;