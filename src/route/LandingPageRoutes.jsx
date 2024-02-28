import { Route, Routes } from 'react-router-dom';
import Rending from '@/pages/Rending/Rending'
import RendingDetail from '@/pages/RendingDetail/RendingDetail'
import NewBoard from '@/pages/NewBoard/NewBoard'

function LandingPageRoutes() {
  return (
    <Routes>
      <Route path='/category/' element={<Rending/>}/>
      <Route path='/category/detail' element={<RendingDetail/>}/>
      <Route path='/category/newBoard' element={<NewBoard/>}/>
    </Routes>
  );
}
export default LandingPageRoutes;
