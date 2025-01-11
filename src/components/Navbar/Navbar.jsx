/*import React from"react";
import{Link} from "react-router-dom";

const Navbar =()=>
{
    return(
        <div>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/BailForm1">BailForm</link>
      </li>
      <li>
        <link to="/LoginForm">Login</link>
      </li>
    </div>
    );
};
export default Navbar;*/
// src/components/Navbar.js
// src/components/Navbar.js
// src/components/Navbar/Navbar.jsx
// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <h1>App Name</h1>
      </div>
      <div style={rightStyle}>
        {/* Add the navigation links */}
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/BailForm1" style={linkStyle}>Bailform</Link>
        <Link to="/Registration" style={linkStyle}>Register</Link>
      </div>
    </nav>
  );
};

// Styling for the navbar
const navStyle = {
  position: 'fixed', // Makes the navbar fixed at the top of the page
  top: 0, // Ensures the navbar is at the top
  left: 0, // Keeps the navbar aligned to the left side
  width: '100%', // Makes the navbar span the entire width of the page
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  zIndex: 1000, // Keeps the navbar above other content when scrolling
};

// Left section of the navbar
const leftStyle = {
  flex: 1,
};

// Right section of the navbar (navigation links)
const rightStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flex: 1,
};

// Styling for the links
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0 15px',
};

export default Navbar;
