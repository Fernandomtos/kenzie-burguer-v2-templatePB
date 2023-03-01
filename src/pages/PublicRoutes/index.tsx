import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const token = localStorage.getItem('@Token');

  return !token ? <Outlet /> : <Navigate to='/shop' />;
};

export default PublicRoutes;
