import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isAuthenticated: boolean;
}

export const PublicRoute = ({ children, isAuthenticated }: Props) => {
  return isAuthenticated ? <Navigate to="/" /> : children;
};
