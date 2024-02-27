import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';

function LoginForm() {
  return (
    <>
      <form action="">
        <EmailInput />
        <PasswordInput />
        <Checkbox />
        <SubmitButton />
      </form>
    </>
  );
}

export default LoginForm;
