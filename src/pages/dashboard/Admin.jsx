import React,{ useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../context/AuthContext';
import Tabs from '../../components/Tabs';
import FormProduct from '../../components/FormProduct';

export default function Admin() {
    const { logout } = useContext(AuthContext);
    const user = localStorage.getItem('name');

    const tabs = [
      { label: 'Dashboard', content: <div>Profile</div> },
      { label: 'Product', content: <FormProduct /> },
      { label: 'Orders', content: <div>Content for tab 3</div> },
      { label: 'Starter', content: <div>Content for tab 4</div> },
    ];

  return (
    <div>
        <Header user={user} logout={logout} />
        <Tabs tabs={tabs} />
    </div>
  )
}
