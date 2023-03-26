import React,{ useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../context/AuthContext';


export default function User() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { logout } = useContext(AuthContext);

  return (
    <div>
        <Header user={user} logout={logout} />
    </div>
  )
}
