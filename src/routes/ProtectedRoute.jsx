import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'contexts/AuthProvider';

export default function ProtectedRoute() {
    const { user, authLoading } = useAuth();

    if (authLoading) return <p>Cargando sesión...</p>;

    if (!user) return <Navigate to="/acceder" replace />;

    return <Outlet />;
};