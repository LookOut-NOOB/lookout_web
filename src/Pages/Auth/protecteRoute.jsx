import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

export const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
