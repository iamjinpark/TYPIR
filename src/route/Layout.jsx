import Footer from '@/atoms/Footer/Footer';
import Header from '@/molecules/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
