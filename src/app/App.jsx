import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/molecules/Header/Header';
import Footer from '@/atoms/Footer/Footer';
import MyPageRoutes from '@/route/MyPageRoutes';
import CommunityPageRoutes from '@/route/CommunityPageRoutes';
import UserPageRoutes from '@/route/UserPageRoutes';
import LandingPageRoutes from '@/route/LandingPageRoutes';

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <Router>
        <Header />
        <UserPageRoutes />
        <LandingPageRoutes />
        <CommunityPageRoutes />
        <MyPageRoutes />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
