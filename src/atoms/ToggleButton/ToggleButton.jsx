import { useToggleStore } from '@/zustand/useStore';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToggleButton() {
  const { isToggled, toggle } = useToggleStore();

  return (
    <button onClick={toggle}>
      <FontAwesomeIcon icon={isToggled ? faToggleOn : faToggleOff} size="lg" className="mt-3" />
    </button>
  );
}
export default ToggleButton;
