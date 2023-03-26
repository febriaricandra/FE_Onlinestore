import { Navigate } from 'react-router-dom';
import React,{ useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Protected = ({ children,role }) => {
    const { user } = useContext(AuthContext);
    const userRole = localStorage.getItem('role');

    if(userRole === role) {
        return children;
    }
    else {
        return <Navigate to="/" />
    }
}

export default Protected;