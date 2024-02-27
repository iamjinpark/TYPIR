import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectPageModal from '../SelectPageModal/SelectPageModal';
import useStore from '@/hooks/useStore';
import Logo from '@/atoms/Logo/Logo';

function Header() {
  const { isModalOpen, openModal } = useStore();

  return (
    <div className="w-80 h-12 bg-white flex justify-between items-center p-4" style={{ position: 'relative' }}>
      <Logo size="w-20" />
      <FontAwesomeIcon icon={faBars} size="lg" onClick={openModal} />
      {isModalOpen && <SelectPageModal />}
    </div>
  );
}
export default Header;
