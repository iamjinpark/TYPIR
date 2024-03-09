import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToggleButton({ isToggled, toggle }) {
  return (
    <button onClick={toggle}>
      <FontAwesomeIcon icon={isToggled ? faToggleOn : faToggleOff} size="lg" className="mt-3" />
    </button>
  );
}
export default ToggleButton;
