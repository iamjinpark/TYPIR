import { getStaticImage } from '@/utils';
function Logo({ size, color = 'black', cursor = 'cursor-default', onClick }) {
  return (
    <h1>
      <img
        src={color == 'white' ? getStaticImage('logo_white.png') : getStaticImage('logo.png')}
        alt="티퍼"
        className={`${size} ${cursor}`}
        onClick={onClick}
      />
    </h1>
  );
}

export default Logo;
