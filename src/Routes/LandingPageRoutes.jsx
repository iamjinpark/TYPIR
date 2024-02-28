import { Route, Routes } from 'react-router-dom';
import Landing from '@/pages/Landing/Landing';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';

function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/landing/signin" element={<SignIn />} />
      <Route path="/landing/signup" element={<SignUp />} />
      <Route path="/landing/signup/setting" element={<SetInitialProfile />} />
    </Routes>
  );
}
export default LandingPageRoutes;
