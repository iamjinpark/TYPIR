import CommonButton from '@/atoms/CommonButton/CommonButton';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import HandleText from '@/atoms/HandleText/HandleText';
import ProfileImage from '@/atoms/ProfileImage/ProfileImage';
import TextContents from '@/atoms/TextContents/TextContents';

function EditProfile() {
  return (
    <div className="w-80 h-[555px] bg-white flex flex-col items-center">
      <TextContents text="프로필 수정" fontWeight="font-bold" fontSize="text-[20px]" margin="mb-3" />
      <ProfileImage />
      <CommonInput text="닉네임" />
      <CommonInput text="핸들" />
      <div className="w-[290px] flex pt-1 pl-2 mb-9">
        <HandleText text="www.typir.com/girls_day" />
      </div>
      <CommonButton />
    </div>
  );
}
export default EditProfile;
