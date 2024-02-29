import { Link } from 'react-router-dom';

function SignInSignUpLinks({ text = '로그인', routeLink = '/splash/signin' }) {
  return (
    <Link
      to={routeLink}
      className={`w-72 h-11 mt-1 flex justify-center items-center rounded-2xl px-4 font-bold ${
        text === '로그인' ? 'bg-black text-white' : 'bg-white text-black border border-black'
      }`}
    >
      {text}
    </Link>
  );
}

export default SignInSignUpLinks;
