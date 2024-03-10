import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useEscape from '@/hooks/useEscape';

function Backward() {
  const navigate = useNavigate();

  useEscape(() => navigate(-1));

  return <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />;
}
export default Backward;
