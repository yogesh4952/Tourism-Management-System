import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

export default function ProtectedRoute() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to='/sign-in' replace />;
  }

  return <Outlet />;
}
