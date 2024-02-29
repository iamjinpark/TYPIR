import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import Splash from '@/pages/Splash/Splash';
import { Route, Routes } from 'react-router-dom';

function UserPageRoutes() {
  return (
    <Routes>
      <Route path="/splash/" element={<Splash />} />
      <Route path="/splash/signin" element={<SignIn />} />
      <Route path="/splash/signup" element={<SignUp />} />
      <Route path="/splash/setprofile" elemet={<SetInitialProfile />} />
    </Routes>
  );
}
export default UserPageRoutes;
