import React from 'react';
import { Link } from 'react-router-dom';

const AccountActionLink = ({ ask = '계정이 없으신가요?', content = '회원가입', router = '/signup' }) => (
  <div>
    {ask} <Link to={router}>{content}</Link>
  </div>
);

export default AccountActionLink;
