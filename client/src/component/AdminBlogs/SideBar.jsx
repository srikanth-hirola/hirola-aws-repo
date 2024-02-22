import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutButton from './buttons/logoutButton';

export const SideBar = () => {

  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleLogout = () => {
    // Additional logout-related logic, if needed
    // For example, redirecting to the login page, etc.
    setSelectedLink(''); // Clear selected link
  };

    return (
        // <div className='admin-side-bar'>
        //     <div className='side-bar-child'>
        //         <Link to={"/admin"}>Blogs</Link>
        //         <Link to={"/admin/portfolio"}>Portfolio</Link>
        //         <Link to={"/admin/team"}>Team</Link>
        //         <Link to={"/admin/news"}>News</Link>
        //         <Link to={"/admin/form"}>FormData</Link>
        //     </div>
        // </div>
        <Navbar bg="dark" variant="dark" className="admin-side-bar">
         
      <Nav className="side-bar-child">

      <Navbar.Brand>
        <Link to="/admin">
          <img
            src="http://hirolainfotech.com/images/logo-3.svg" // Replace with the actual path to your logo
            width="90%"
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Link>
      </Navbar.Brand>
        <Nav.Item >
          <Nav.Link as={Link} to="/admin" className={`sidebar-link ${location.pathname === '/admin' || location.pathname === '/admin/compose' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin')}>
            Blogs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link as={Link} to="/admin/portfolio" className={`sidebar-link ${location.pathname === '/admin/portfolio' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin/portfolio')}>
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/team" className={`sidebar-link ${location.pathname === '/admin/team' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin/team')}>
            Team
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/news" className={`sidebar-link ${location.pathname === '/admin/news' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin/news')} >
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/cities" className={`sidebar-link ${location.pathname === '/admin/cities' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin/cities')} >
            Cities
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/clients" className={`sidebar-link ${location.pathname === '/admin/clients' ? 'selected' : ''}`}
            onClick={() => handleLinkClick('/admin/clients')} >
            Clients
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
             as={Link} 
             to="/admin/form" 
             className={`sidebar-link ${location.pathname === '/admin/form' ? 'selected' : ''}`}
             onClick={() => handleLinkClick('/admin/form')}
             >
            FormData
          </Nav.Link>
        </Nav.Item>
      <LogoutButton onLogout={handleLogout} />
      </Nav>
    </Navbar>
    )
}
