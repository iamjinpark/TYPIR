import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectPageModal from '../SelectPageModal/SelectPageModal';
import Logo from '@/atoms/Logo/Logo';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import { useSelectCategoryStore } from '@/zustand/useStore';
import { useNavigate } from 'react-router-dom';
import Bar from '@/atoms/Bar/Bar';
import { useUserStore } from '@/zustand/useUserStore';

function Header() {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useSelectCategoryStore();

  const handleNavigate = (path) => {
    navigate(path);
    closeModal();
  };

  const { logoutUser } = useUserStore(); // setUser 함수를 직접 구조분해 할당으로 추출

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
            onClick={() => handleNavigate('/mypage/newpost')}
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

      <FontAwesomeIcon icon={faBars} size="lg" onClick={openModal} className="sm:hidden" />
      {isModalOpen && <SelectPageModal />}
    </div>
  );
}

export default Header;
