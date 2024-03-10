import Logo from '@/atoms/Logo/Logo';
import Bar from '@/atoms/Bar/Bar';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import NewPostModal from '../NewPostModal/NewPostModal';
import SelectPageModal from '../SelectPageModal/SelectPageModal';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useNewPostModalStore, useProfileStore, useSelectCategoryStore } from '@/zustand/useStore';
import { useUserStore } from '@/zustand/useUserStore';

function Header() {
  const { logoutUser } = useUserStore();
  const navigate = useNavigate();

  /* SelectPage 모달 상태관리 */
  const {
    isModalOpen: isCategoryModalOpen,
    openModal: openCategoryModal,
    closeModal: closeCategoryModal,
  } = useSelectCategoryStore();

  /* NewPost 모달 상태관리 */
  const {
    isModalOpen: isNewPostModalOpen,
    openModal: openNewPostModal,
    closeModal: closeNewPostModal,
  } = useNewPostModalStore();

  const handleNavigate = (path) => {
    navigate(path);
    closeCategoryModal();
    closeNewPostModal();
  };

  return (
    <div
      className="w-full bg-white flex justify-between items-center p-4 sticky top-0 sm:h-[70px] sm:p-7"
      style={{ zIndex: 15 }}
    >
      <Logo size="w-[80px] sm:w-[100px]" cursor="cursor-pointer" onClick={() => handleNavigate('/style')} />

      <div className="hidden sm:flex sm:flex-col sm:items-end sm:gap-1">
        <div className="flex items-center">
          <LinkButton
            text="New Post"
            fontFamily="font-serif"
            fontColor="text-black"
            fontSize="text-[13px]"
            hoverColor="hover:text-black"
            hoverScale=""
            onClick={() => {
              openNewPostModal();
            }}
          />
          <Bar color="bg-black" />
          <LinkButton
            text="Logout"
            fontFamily="font-serif"
            fontColor="text-black"
            fontSize="text-[13px]"
            hoverColor="hover:text-black"
            hoverScale=""
            onClick={() => {
              logoutUser();
              localStorage.removeItem('user');
              navigate('/splash');
            }}
          />
        </div>

        <div className="flex gap-5">
          <LinkButton
            text="STYLE"
            fontFamily="font-serif"
            fontColor="text-black"
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
            onClick={() => handleNavigate('/style')}
          />
          <LinkButton
            text="COMMUNITY"
            fontFamily="font-serif"
            fontColor="text-black"
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
            onClick={() => handleNavigate('/community')}
          />
          <LinkButton
            text="MY PAGE"
            fontFamily="font-serif"
            fontColor="text-black"
            fontSize="text-[16px]"
            hoverColor="hover:text-black"
            onClick={() => handleNavigate('/mypage')}
          />
        </div>
      </div>

      <FontAwesomeIcon icon={faBars} size="lg" onClick={openCategoryModal} className="sm:hidden" />
      {isCategoryModalOpen && <SelectPageModal />}
      {isNewPostModalOpen && <NewPostModal top="top-[35px]" right="right-[25px]" />}
    </div>
  );
}

export default Header;
