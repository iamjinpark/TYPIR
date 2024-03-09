import Bar from '../../atoms/Bar/Bar';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import NewPostModal from '../NewPostModal/NewPostModal';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/zustand/useUserStore';
import { useNewPostModalStore, useSelectCategoryStore } from '@/zustand/useStore';

function SelectPageModal() {
  const navigate = useNavigate();
  const { logoutUser } = useUserStore();

  const {
    // isModalOpen: isCategoryModalOpen,
    // openModal: openCategoryModal,
    closeModal: closeCategoryModal,
  } = useSelectCategoryStore();

  // 두 번째 모달 관리
  const {
    isModalOpen: isNewPostModalOpen,
    openModal: openNewPostModal,
    // closeModal: closeNewPostModal,
  } = useNewPostModalStore();

  const handleNavigate = (path) => {
    navigate(path);
    closeCategoryModal();
  };

  return (
    <div className="w-full h-screen bg-gray-700 z-10" style={{ position: 'absolute', top: 0, left: 0 }}>
      <div className="flex justify-end items-start pt-4 pr-4">
        <FontAwesomeIcon icon={faXmark} color="white" onClick={closeCategoryModal} />
      </div>
      <div className="h-5/6 flex flex-col gap-6 justify-center items-center">
        <LinkButton text="CATEGORY" onClick={() => handleNavigate('/style')} />
        <LinkButton text="COMMUNITY" onClick={() => handleNavigate('/community')} />
        <LinkButton text="MY PAGE" onClick={() => handleNavigate('/mypage')} />
      </div>
      <div className="h-1/6 flex justify-center items-center pb-14">
        <LinkButton
          text="New Post"
          fontSize="text-[14px]"
          hoverScale=""
          onClick={() => {
            openNewPostModal();
          }}
        />
        <Bar />
        <LinkButton
          text="Logout"
          fontSize="text-[14px]"
          hoverScale=""
          onClick={() => {
            logoutUser();
            localStorage.removeItem('user');
            navigate('/splash');
          }}
        />
      </div>
      <div className="flex justify-center">
        {isNewPostModalOpen && (
          <NewPostModal bottom="bottom-[80px]" bgColor="bg-tansparent" border="border-none" showCloseIcon={false} />
        )}
      </div>
    </div>
  );
}
export default SelectPageModal;
