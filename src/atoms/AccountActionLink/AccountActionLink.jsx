import React from 'react';
import { Link } from 'react-router-dom';

const AccountActionLink = ({ ask, text = '회원가입' }) => {
  const askMessage = text === '로그인' ? '계정이 있으신가요?' : '계정이 없으신가요?';
  const router = text === '로그인' ? '/splash/signin' : '/splash/signup';

  return (
    <div className="mt-15px">
      {ask ? ask : askMessage}
      <Link to={router} className="text-gray-300 ml-10px">
        {text}
      </Link>
    </div>
  );
};

export default AccountActionLink;
