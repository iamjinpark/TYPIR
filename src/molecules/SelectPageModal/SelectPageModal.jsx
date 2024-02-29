import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import Bar from '../../atoms/Bar/Bar';
import { useSelectCategoryStore } from '@/hooks/useStore';
import { useNavigate } from 'react-router-dom';

function SelectPageModal() {
  const { closeModal } = useSelectCategoryStore();
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/category', { state: { scrollTo: 0 } });
    closeModal();
  };

  const handleMyPageClick = () => {
    navigate('/mypage', { state: { scrollTo: 0 } });
    closeModal();
  };

  const handleNewPostClick = () => {
    navigate('/mypage', { state: { scrollTo: 295 } });
    closeModal();
  };

  return (
    <div className="w-full h-screen bg-gray-700 z-10" style={{ position: 'absolute', top: 0, left: 0 }}>
      <div className="flex justify-end items-start pt-4 pr-4">
        <FontAwesomeIcon icon={faXmark} color="white" onClick={closeModal} />
      </div>
      <div className="h-5/6 flex flex-col gap-6 justify-center items-center">
        <LinkButton text="CATEGORY" onClick={handleCategoryClick} />
        <LinkButton text="COMMUNITY" />
        <LinkButton text="MY PAGE" onClick={handleMyPageClick} />
      </div>
      <div className="h-1/6 flex justify-center items-center pb-14">
        <LinkButton text="New Post" fontSize="text-[14px]" hoverScale="" onClick={handleNewPostClick} />
        <Bar />
        <LinkButton text="Logout" fontSize="text-[14px]" hoverScale="" />
      </div>
    </div>
  );
}
export default SelectPageModal;
