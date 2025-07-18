import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let userRole;

  if (token) {
    userRole = verifyToken(token);
  }

  const dispatch = useDispatch();

  if (role !== undefined && role !== userRole?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
