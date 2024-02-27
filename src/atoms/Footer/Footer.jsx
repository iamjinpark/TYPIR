import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="w-[320px] h-[288px] pt-8 pl-6 border-t border-gray-50 bg-white">
      <div className="pr-10">
        <div className="font-bold grid grid-cols-2 grid-rows-1 mb-4 text-[12px]">
          <span>이용안내</span>
          <span>고객지원</span>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-2 text-gray-200 text-[11px]">
          <span>이용 정책</span>
          <span>공지사항</span>
          <span>패널티 정책</span>
          <span>서비스 소개</span>
          <span>커뮤니티 가이드라인</span>
          <span>이메일 문의</span>
        </div>
      </div>
      <div className="pt-6 pr-10 grid grid-cols-4 text-[11px]">
        <span>회사소개</span>
        <span>인재채용</span>
        <span>이용약관</span>
        <span className="font-bold whitespace-nowrap">개인정보처리방침</span>
      </div>
      <div className="flex justify-between items-end mt-6">
        <img src="/images/footer-social.png" className="w-[80px]" alt="" />
        <div className="text-[8px] mr-3">
          <span>사업자정보</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </div>
      </div>
      <div className="flex justify-center mt-8 mr-6 text-gray-200 text-[8px] tracking-[0.7px]">Ⓒ TYPIR Corp.</div>
    </footer>
  );
}
export default Footer;
