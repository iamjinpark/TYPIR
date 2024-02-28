import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/molecules/Header/Header';
import Footer from '@/atoms/Footer/Footer';
import MyPageRoutes from '@/Routes/MyPageRoutes';
import CommunityPageRoutes from '@/Routes/CommunityPageRoutes';
import UserPageRoutes from '@/Routes/UserPageRoutes';
import LandingPageRoutes from '@/Routes/LandingPageRoutes';

function App() {
  return (
    <Router>
      <Header />
      <UserPageRoutes />
      <LandingPageRoutes />
      <CommunityPageRoutes />
      <MyPageRoutes />
      <Footer />
    </Router>
  );
}
export default App;
