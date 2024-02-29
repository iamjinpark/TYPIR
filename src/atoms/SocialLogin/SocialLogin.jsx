function SocialLogin({ className }) {
  return (
    <div className={`${className}`}>
      <p className="text-center">소셜 로그인</p>
      <ul className="flex gap-4">
        <li>
          <a href="#">
            <img src="/public/images/icon_naver.svg" alt="네이버 소셜 로그인" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/images/icon_kakaotalk.svg" alt="카카오톡 소셜 로그인" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/images/icon_google.svg" alt="구글 소셜 로그인" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLogin;
