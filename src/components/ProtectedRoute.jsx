import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ isAdmin, children }) {
  if (!isAdmin) {
    // Si no es admin, redirige al login
    return <Navigate to="/login" replace />;
  }

  return children;
}