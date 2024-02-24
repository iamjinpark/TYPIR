import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectPageModal from '../SelectPageModal/SelectPageModal';
import useStore from '@/hooks/useStore';

function Header() {
  const { isModalOpen, openModal } = useStore();

  return (
    <div className="w-80 h-12 bg-white flex justify-between items-center p-4" style={{ position: 'relative' }}>
      <span>Logo</span>
      <FontAwesomeIcon icon={faBars} size="lg" onClick={openModal} />
      {isModalOpen && <SelectPageModal />}
    </div>
  );
}
export default Header;
