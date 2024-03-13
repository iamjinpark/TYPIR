import pb from '@/api/pocketbase';
import { useUserStore } from '@/zustand/useUserStore';
import { Navigate } from 'react-router-dom';

function Redirect() {
  const { isValid: isLogined } = pb.authStore;
  return isLogined ? <Navigate to="/style" /> : <Navigate to="/splash" replace />;
}

export default Redirect;
