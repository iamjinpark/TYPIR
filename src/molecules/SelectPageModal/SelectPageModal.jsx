import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkButton from '@/atoms/LinkButton/LinkButton';
import Bar from '../../atoms/Bar/Bar';

function SelectPageModal() {
  return (
    <div className="w-[320px] h-[650px] bg-black opacity-70">
      <div className="flex justify-end items-start pt-4 pr-4">
        <FontAwesomeIcon icon={faXmark} color="white" />
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
