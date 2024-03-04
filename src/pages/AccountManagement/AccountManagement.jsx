import CommonButton from '@/atoms/CommonButton/CommonButton';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import TextContents from '@/atoms/TextContents/TextContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import Backward from '@/atoms/Backward/Backward';
import DeleteModal from '@/molecules/DeleteModal/DeleteModal';
import { useDeleteModalStore } from '@/zustand/useStore';
import ToggleButton from '@/atoms/ToggleButton/ToggleButton';

function AccountManagement() {
  const { openModal, closeModal, isModalOpen } = useDeleteModalStore();

  const handleDeleteAccountClick = () => {
    openModal();
  };

  return (
    <div className="w-full h-[570px] bg-white flex flex-col items-center mb-8">
      <div className="w-full flex justify-between p-5">
        <div className="flex-1">
          <Backward />
        </div>
        <TextContents text="계정 관리" fontWeight="font-bold" fontSize="text-[20px]" />
        <div className="flex-1"></div>
      </div>
      <CommonInput text="이메일" borderColor="border-transparent" />
      <CommonInput text="비밀번호" borderColor="border-content" />
      <CommonButton text="비밀번호 변경" width="w-[90px]" height="h-[33px]" margin="mt-5" />
      <div className="w-[288px] flex items-center justify-between mt-8">
        <div className="flex flex-col w-[200px] gap-2">
          <TextContents text="비공개 프로필" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="프로필이 비공개인 경우 승인된 사용자만 프로필, 찜목록, 게시물을 볼 수 있습니다." />
        </div>
        <ToggleButton />
      </div>
      <div className="w-[288px] flex items-center justify-between mt-5">
        <div className="flex flex-col w-[210px] gap-2">
          <TextContents text="개인정보 보호 검색" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="검색 엔진에서 프로필 및 찜목록을 숨깁니다." />
        </div>
        <ToggleButton />
      </div>
      <div className="w-[288px] flex items-center justify-between mt-5">
        <div className="flex flex-col w-[200px] gap-2">
          <TextContents text="계정 삭제" fontWeight="font-bold" fontSize="text-[16px]" />
          <TextContents text="데이터 및 계정과 관련된 모든 정보를 영구적으로 삭제합니다." />
        </div>
        <CommonButton text="계정 삭제" width="w-[65px]" margin="mt-7" onClick={handleDeleteAccountClick} />
        {isModalOpen && <DeleteModal closeModal={closeModal} />}
      </div>
    </div>
  );
}
export default AccountManagement;
