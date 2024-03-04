import { Link } from 'react-router-dom';

function SignInSignUpLinks({ text = '로그인', className = '' }) {
  return (
    <Link
      to={text === '로그인' ? '/splash/signin' : '/splash/signup'}
      className={`min-w-[290px] max-w-[768px] w-full h-11 mt-1 flex justify-center items-center rounded-2xl px-4 font-bold mb-[5px] block mx-[15px]
      ${text === '로그인' ? 'bg-black text-white' : 'bg-white text-black border border-black'} ${className}`}
    >
      {text}
    </Link>
  );
}

export default SignInSignUpLinks;
