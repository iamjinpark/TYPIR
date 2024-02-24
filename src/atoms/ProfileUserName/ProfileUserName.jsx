import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileUserName({ text = 'username' }) {
  return (
    <div>
      <div className="font-serif font-bold text-[23px] inline mr-2">{text}</div>
      <FontAwesomeIcon icon={faLock} size="xs" />
    </div>
  );
}
export default ProfileUserName;
