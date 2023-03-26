import React,{ useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../context/AuthContext';
import Tabs from '../../components/Tabs';


export default function User() {
    const { logout } = useContext(AuthContext);
    const user = localStorage.getItem('name');
    const data = localStorage.getItem('user');
    const userObj = JSON.parse(data);

    const tabs = [
      { label: 'Profile', content: <div>Profile</div> },
      { label: 'Settings', content: <div>Content for tab 2</div> },
      { label: 'FAQs', content: <div>Content for tab 3</div> },
    ];

  return (
    <div>
        <Header user={user} logout={logout} />
        <Tabs tabs={tabs} />
    </div>
  )
}
