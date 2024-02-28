import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import SocialLogin from '@/atoms/SocialLogin/SocialLogin';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

const SignUp = () => {
  return (
    // 전체 컨테이너를 320x650px 크기로 설정하고, 화면 중앙에 배치합니다.
    <div className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      {/* AccountPageTitle 컴포넌트 상단 여백 75px 적용 */}
      <div className="mt-75px mb-43px">
        <AccountPageTitle text="회원가입" />
      </div>
      <form action="" className="w-full flex flex-col items-center">
        {/* EmailInput 컴포넌트 */}
        <EmailInput />
        {/* EmailInput과 PasswordInput 사이 간격 38px 적용 */}
        <div className="mt-18px">
          <PasswordInput />
        </div>
        {/* PasswordInput "패스워드 확인"과 간격을 동일하게 유지 */}
        <div className="mt-18px">
          <PasswordInput text="패스워드 확인" />
        </div>
        {/* SubmitButton 컴포넌트 */}
        <div className="mt-31px">
          <SubmitButton text="회원가입" />
        </div>
      </form>
      {/* SocialLogin 컴포넌트는 폼 아래에 위치 */}
      <div className="mt-32px">
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
