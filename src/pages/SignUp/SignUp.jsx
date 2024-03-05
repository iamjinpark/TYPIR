import React, { useState, useEffect } from 'react';
import AccountActionLink from '@/atoms/AccountActionLink/AccountActionLink';
import AccountPageTitle from '@/atoms/AccountPageTitle/AccountPageTitle';
import EmailInput from '@/atoms/EmailInput/EmailInput';
import PasswordInput from '@/atoms/PasswordInput/PasswordInput';
import SubmitButton from '@/atoms/SubmitButton/SubmitButton';
import Checkbox from '@/atoms/Checkbox/Checkbox';
import PocketBase from 'pocketbase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const pb = new PocketBase('https://pocket10.kro.kr');

  useEffect(() => {
    const passwordsMatch = password === confirmPassword && confirmPassword !== '';
    setIsFormValid(emailValid && passwordValid && passwordsMatch && termsChecked);
  }, [emailValid, passwordValid, password, confirmPassword, termsChecked]);

  // 비밀번호 유효성 검사 결과 처리 함수
  const handlePasswordValidationChange = (isValid) => {
    setPasswordValid(isValid);
    // 추가 작업 가능, 예를 들어 상태 업데이트나 경고 메시지 표시 등
  };

  // 이메일 유효성 검사 결과 처리 함수
  const handleEmailValidationChange = (isValid) => {
    setEmailValid(isValid);
    // 추가 작업 가능
  };

  // 이메일 중복 확인 함수
  const checkEmailExists = async (emailToCheck) => {
    try {
      const users = await pb.collection('users').getList({ filter: `email="${emailToCheck}"` });
      console.log(users);
      return users.total > 0;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false; // 오류가 발생하면 존재하지 않는다고 가정
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    // 이메일 중복 확인
    const emailExists = await checkEmailExists(email); // 이메일 인자 전달 수정
    if (emailExists) {
      alert('이미 존재하는 이메일 주소입니다. 다른 이메일 주소를 사용해주세요.');
      return; // 여기서 함수 종료
    }

    // 회원가입 데이터 준비 및 서버로 전송
    const data = {
      username: email,
      email: email,
      password: password,
      // 기타 필수 데이터 필드
      handle: '', // 예시 값, 실제 애플리케이션에 맞게 조정
      isPrivate: false,
      isProtect: false,
      // 관계형 필드는 실제 관계가 설정된 후에 포함시킬 것
      album: [],
      board: [],
      bookmark: [],
      community: [],
    };

    try {
      await pb.collection('users').create(data);
      alert('축하합니다! 회원가입 완료되었습니다.');
      // window.location.href = '/src/pages/login/';
    } catch (error) {
      console.error(error);
      alert('회원가입 중 오류가 발생했습니다. 입력 내용을 확인해주세요.');
    }
  };

  return (
    <div className="w-[320px] h-[650px] mx-auto flex flex-col items-center justify-start">
      <AccountPageTitle text="회원가입" className="mt-75px mb-43px" />
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onValidationChange={handleEmailValidationChange}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onValidationChange={handlePasswordValidationChange}
          className="mt-18px"
        />
        <PasswordInput
          text="패스워드 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-18px"
          isConfirm={true}
          password={password}
          onValidationChange={(isValid) => setPasswordValid(isValid && password === confirmPassword)}
        />
        <Checkbox
          text="이용약관에 동의합니다"
          className="mt-16px w-full px-20px"
          onChange={(e) => setTermsChecked(e.target.checked)}
        />
        <SubmitButton isFormValid={isFormValid} text="회원가입" className="mt-31px" />
      </form>
      <AccountActionLink text="로그인" />
    </div>
  );
};

export default SignUp;
