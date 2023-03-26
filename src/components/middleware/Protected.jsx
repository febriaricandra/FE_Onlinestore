import { Navigate } from 'react-router-dom';
import React,{ useContext } from 'react'

const Protected = ({ children,role }) => {
    const user = localStorage.getItem('user');
    if(user) {
        const { role: userRole } = JSON.parse(user);
        if(role && userRole !== role) {
            return <Navigate to="/login" />
        }
        return children;
    }
}

export default Protected;