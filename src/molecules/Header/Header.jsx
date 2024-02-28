import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectPageModal from '../SelectPageModal/SelectPageModal';
import { useSelectCategoryStore } from '@/hooks/useStore';
import Logo from '@/atoms/Logo/Logo';

function Header() {
  const { isModalOpen, openModal } = useSelectCategoryStore();

  return (
    <div className="w-full h-[48px] bg-white flex justify-between items-center p-4 sticky top-0" style={{ zIndex: 20 }}>
      <Logo size="w-20" />
      <FontAwesomeIcon icon={faBars} size="lg" onClick={openModal} />
      {isModalOpen && <SelectPageModal />}
    </div>
  );
}
export default Header;
