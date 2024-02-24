import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import Bar from '../../atoms/Bar/Bar';
import useStore from '@/hooks/useStore';

function SelectPageModal() {
  const { closeModal } = useStore();

  return (
    <div className="w-80 h-[650px] bg-gray-700" style={{ position: 'absolute', top: 0, left: 0 }}>
      <div className="flex justify-end items-start pt-4 pr-4">
        <FontAwesomeIcon icon={faXmark} color="white" onClick={closeModal} />
      </div>
      <div className="h-[570px] flex flex-col gap-6 justify-center">
        <LinkButton text="CATEGORY" />
        <LinkButton text="COMMUNITY" />
        <LinkButton text="MY PAGE" />
      </div>
      <div className="flex justify-center items-center">
        <LinkButton text="New Post" fontSize="14px" />
        <Bar />
        <LinkButton text="Logout" fontSize="14px" />
      </div>
    </div>
  );
}
export default SelectPageModal;
