import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}

export const PrivateRoute = ({ children, isAuthenticated }: Props) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
