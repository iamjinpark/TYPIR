import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileUserName({ text = 'username', isPrivate = false }) {
  return (
    <div>
      <div className="font-serif font-bold text-[23px] inline mr-2">{text}</div>
      {isPrivate && <FontAwesomeIcon icon={faLock} size="xs" />}
    </div>
  );
}
export default ProfileUserName;
