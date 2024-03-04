import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import Bar from '../../atoms/Bar/Bar';
import { useSelectCategoryStore } from '@/zustand/useStore';
import { useNavigate } from 'react-router-dom';

function SelectPageModal() {
  const navigate = useNavigate();
  const { closeModal } = useSelectCategoryStore();

  const handleNavigate = (path) => {
    navigate(path);
    closeModal();
  };

  return (
    <div className="w-full h-screen bg-gray-700 z-10" style={{ position: 'absolute', top: 0, left: 0 }}>
      <div className="flex justify-end items-start pt-4 pr-4">
        <FontAwesomeIcon icon={faXmark} color="white" onClick={closeModal} />
      </div>
      <div className="h-5/6 flex flex-col gap-6 justify-center items-center">
        <LinkButton text="CATEGORY" onClick={() => handleNavigate('/category')} />
        <LinkButton text="COMMUNITY" />
        <LinkButton text="MY PAGE" onClick={() => handleNavigate('/mypage')} />
      </div>
      <div className="h-1/6 flex justify-center items-center pb-14">
        <LinkButton
          text="New Post"
          fontSize="text-[14px]"
          hoverScale=""
          onClick={() => handleNavigate('/mypage/newpost')}
        />
        <Bar />
        <LinkButton text="Logout" fontSize="text-[14px]" hoverScale="" />
      </div>
    </div>
  );
}
export default SelectPageModal;
