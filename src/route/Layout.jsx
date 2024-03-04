import Footer from '@/atoms/Footer/Footer';
import Header from '@/molecules/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isSplashPage = location.pathname === '/' || location.pathname.startsWith('/splash');

  return (
    <>
      {!isSplashPage && <Header />}

      <Outlet />

      {!isSplashPage && <Footer />}
    </>
  );
}

export default Layout;
