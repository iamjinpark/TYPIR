import Footer from '@/atoms/Footer/Footer';
import Header from '@/molecules/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
