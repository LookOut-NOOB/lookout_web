import { Navigate, Outlet } from "react-router-dom";

export const UserAuth = (login) => {
  if (login === "success") {
    return true;
  } else return true;
};

export const ProtectedRoute = () => {
  const isAuth = UserAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
