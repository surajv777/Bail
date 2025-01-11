/*import {createBrowserRouter,RouterProvider}from"react-router-dom";

import Home from'./components/Home/Home.jsx';
import BailForm1 from'./components/BailForm1/BailForm1.jsx';
import LoginForm from'./components/LoginForm/LoginForm.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
var React=require('react');
var ReactDOM=require('react-dom');


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/BailForm1',
    element:<BailForm1/>
  },
  {
    path:'/LoginForm',
    element:<LoginForm/>
  }
]);

export default App;*/
// src/App.js
// src/App.js
// src/App.js
// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import Navbar from './components/Navbar/Navbar'; // Import Navbar
import Home from './components/Home/Home'; // Import Home page
import Login from './components/LoginForm/LoginForm'; // Import Login page
import BailForm1 from './components/BailForm1/BailForm1'; // Import Bailform page
import RegistrationForm from './components/Registration';
import LawyersPage from './components/LawyersPage';

function App() {
  return (
    <div>
      <Navbar /> {/* Display the Navbar */}
      <Routes>
        {/* Define the routes for each page */}Login
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BailForm1" element={<BailForm1 />} />
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/lawyers" element={<LawyersPage />} />
      </Routes>
    </div>
  );
}

export default App;
