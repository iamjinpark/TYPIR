import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/molecules/Header/Header';
import Footer from '@/atoms/Footer/Footer';

import UserPageRoutes from '@/route/UserPageRoutes';
import LandingPageRoutes from '@/route/LandingPageRoutes';
import CommunityPageRoutes from '@/route/CommunityPageRoutes';
import MyPageRoutes from '@/route/MyPageRoutes';

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="user/*" element={<UserPageRoutes />} />
          <Route path="category/*" element={<LandingPageRoutes />} />
          <Route path="community/*" element={<CommunityPageRoutes />} />
          <Route path="mypage/*" element={<MyPageRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
