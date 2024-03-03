import React from 'react';
import { Link } from 'react-router-dom';

const AccountActionLink = ({ ask, text = '회원가입', router = '/signup' }) => {
  const askMessage = text === '로그인' ? '계정이 있으신가요?' : '계정이 없으신가요?';

  return (
    <div className="mt-15px">
      {ask ? ask : askMessage}{' '}
      <a href={router} className="text-gray-300">
        {text}
      </a>
    </div>
  );
};

export default AccountActionLink;
