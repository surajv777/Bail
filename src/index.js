
/*import './index.css';
import App from './App';
var React=require('react');
var ReactDOM=require('react-dom');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);*/
// src/index.js
// src/index.js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Global styles
import App from './App'; // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router> {/* Only wrap the App component here */}
    <App />
  </Router>
);

