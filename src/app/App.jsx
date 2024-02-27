import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import Header from '@/molecules/Header/Header';
import EditProfile from '@/pages/EditProfile/EditProfile';
import Footer from '@/atoms/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/account" element={<AccountManagement />} />
        <Route path="/mypage/editProfile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
