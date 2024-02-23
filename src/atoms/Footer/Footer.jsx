import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="w-320 h-96 pl-8">
      <div className="border-t border-gray-50 pt-12 pr-[80px]">
        <div className="font-bold grid grid-cols-2 grid-rows-1 mb-5 text-[18px]">
          <span>이용안내</span>
          <span>고객지원</span>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-2 text-gray-200">
          <span>이용 정책</span>
          <span>공지사항</span>
          <span>패널티 정책</span>
          <span>서비스 소개</span>
          <span>커뮤니티 가이드라인</span>
          <span>이메일 문의</span>
        </div>
      </div>
      <div className="pt-8 pr-[140px] grid grid-cols-4">
        <span>회사소개</span>
        <span>인재채용</span>
        <span>이용약관</span>
        <span className="font-bold w-100">개인정보처리방침</span>
      </div>
      <div className="flex justify-between items-end pr-4 mt-8">
        <img src="/images/social.png" alt="" />
        <div className="text-sm">
          <span>사업자정보</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </div>
      </div>
      <div className="flex justify-center mt-10 text-gray-200 text-sm tracking-[0.7px]">Ⓒ TYPIR Corp.</div>
    </footer>
  );
}
export default Footer;
