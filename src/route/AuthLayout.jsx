import pb from '@/api/pocketbase';
import { Navigate, Outlet } from 'react-router-dom';

function AuthLayout() {
  const { isValid: isLogined } = pb.authStore;
  return isLogined ? <Outlet /> : <Navigate to="/splash" replace />;
}

export default AuthLayout;
