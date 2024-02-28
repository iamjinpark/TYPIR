import logo from '/public/images/logo.png';
import logo_white from '/public/images/logo_white.png';

function Logo({ size, color = 'black' }) {
  return (
    <h1>
      <img src={color == 'white' ? logo_white : logo} alt="티퍼" className={`${size}`} />
    </h1>
  );
}

export default Logo;
