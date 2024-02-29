import { Route, Routes } from 'react-router-dom';
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';

function MyPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="account" element={<AccountManagement />} />
      <Route path="editProfile" element={<EditProfile />} />
      <Route path="board" element={<MyPage />} />
      <Route path="post" element={<MyPage />} />
      <Route path="bookmark" element={<MyPage />} />
    </Routes>
  );
}

export default MyPageRoutes;
