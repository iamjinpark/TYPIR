import logo from '@/assets/logo.png';

function Logo({ size }) {
  return (
    <h1>
      <img src={logo} alt="티퍼" className={`${size}`} />
    </h1>
  );
}

export default Logo;
