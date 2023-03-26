import React,{ useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../context/AuthContext';


export default function User() {
    const { logout } = useContext(AuthContext);
    const user = localStorage.getItem('name');

  return (
    <div>
        <Header user={user} logout={logout} />
    </div>
  )
}
