import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import SocialLogin from '@/atoms/SocialLogin/SocialLogin';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

const SignUp = () => {
  return (
    <div className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      <AccountPageTitle text="회원가입" className={'mt-75px mb-43px'} />
      <form action="" className="w-full flex flex-col items-center">
        <EmailInput />
        <PasswordInput className={'mt-18px'} />
        <PasswordInput text="패스워드 확인" className={'mt-18px'} />
        <SubmitButton text="회원가입" className={'mt-31px'} />
      </form>
      <SocialLogin className={'mt-32px'} />
    </div>
  );
};

export default SignUp;
