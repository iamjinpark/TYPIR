import { Route, Routes } from 'react-router-dom';
import Rending from '@/pages/Rending/Rending';
import RendingDetail from '@/pages/RendingDetail/RendingDetail';
import NewBoard from '@/pages/NewBoard/NewBoard';

function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rending />} />
      <Route path="detail" element={<RendingDetail />} />
      <Route path="newboard" element={<NewBoard />} />
    </Routes>
  );
}
export default LandingPageRoutes;
