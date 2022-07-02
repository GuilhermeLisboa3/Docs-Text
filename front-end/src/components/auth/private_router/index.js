import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('user')
    return auth ? children : <Navigate to={{pathname:'/login'}}/>
}

export default PrivateRoute;