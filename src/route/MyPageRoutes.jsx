import { Route, Routes } from 'react-router-dom';
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';

function MyPageRoutes() {
  return (
    <Routes>
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/mypage/account" element={<AccountManagement />} />
      <Route path="/mypage/editProfile" element={<EditProfile />} />
    </Routes>
  );
}
export default MyPageRoutes;
