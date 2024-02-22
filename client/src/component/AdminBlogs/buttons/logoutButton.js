// Logout.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

const LogoutButton = ({ onLogout }) => {
  const [cookies, , removeCookie] = useCookies(['adminBlogCookie']);

  const handleLogout = () => {
    // Remove the 'adminBlogCookie' cookie when logging out
    removeCookie('adminBlogCookie');
    // Trigger the onLogout callback (passed from parent component, e.g., SideBar)
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
