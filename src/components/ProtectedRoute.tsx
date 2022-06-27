import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { isUserLoggedIn } from '../utils';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const user = isUserLoggedIn()
    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    
    return children
}

export default ProtectedRoute