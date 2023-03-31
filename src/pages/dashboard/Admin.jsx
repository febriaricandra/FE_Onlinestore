import React,{ useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../context/AuthContext';
import Tabs from '../../components/Tabs';
import FormProduct from '../../components/FormProduct';
import Profile from '../../components/Profile';
import Orders from '../../components/Orders';

export default function Admin() {
    const { logout } = useContext(AuthContext);
    const user = localStorage.getItem('name');
    const data = localStorage.getItem('user');
    const userObj = JSON.parse(data);
    

    const tabs = [
      { label: 'Dashboard', content: <Profile user={userObj} /> },
      { label: 'Product', content: <FormProduct /> },
      { label: 'Orders', content: <Orders /> },
      { label: 'Starter', content: <div>Content for tab 4</div> },
    ];

  return (
    <div>
        <Header user={user} logout={logout} />
        <Tabs tabs={tabs} />
    </div>
  )
}
