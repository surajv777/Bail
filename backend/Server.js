const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Enable cross-origin resource sharing

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Change this to your MySQL username
  password: '',       // Change this to your MySQL password
  database: 'validation'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Route to handle login
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  app.post('/register', async (req, res) => {
    const { role, name, password, level, location, experience, fee, age, case_no, type, sentence } = req.body;
  
    // Validate required fields
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Password is required and must be a string' });
    }
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Handle role-based registration
      if (role === 'Judge') {
        if (!name || !level || !location) {
          return res.status(400).json({ message: 'Missing fields for Judge registration' });
        }
  
        const query = `INSERT INTO judges (name, password, level, location) VALUES (?, ?, ?, ?)`;
        db.query(query, [name, hashedPassword, level, location], (err) => {
          if (err) return res.status(500).json({ message: 'Database error', error: err });
          res.status(201).json({ message: 'Judge registered successfully' });
        });
      } 
      else if (role === 'Lawyer') {
        if (!name || !experience || !location || !fee || !contact) {
          return res.status(400).json({ message: 'Missing fields for Lawyer registration' });
        }
  
        const query = `INSERT INTO lawyers (name, password, experience, location, fee, age) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [name, hashedPassword, experience, location, fee, contact], (err) => {
          if (err) return res.status(500).json({ message: 'Database error', error: err });
          res.status(201).json({ message: 'Lawyer registered successfully' });
        });
      } 
      else if (role === 'Accused') {
        if (!name || !case_no || !location || !type) {
          return res.status(400).json({ message: 'Missing fields for Accused registration' });
        }
  
        const query = `INSERT INTO accused (name, password, case_no, location, type, sentence) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [name, hashedPassword, case_no, location, type, sentence || ''], (err) => {
          if (err) return res.status(500).json({ message: 'Database error', error: err });
          res.status(201).json({ message: 'Accused registered successfully' });
        });
      } 
      else {
        res.status(400).json({ message: 'Invalid role specified' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error hashing the password', error });
    }
  });
  // Validate request body
  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Query database to find user by username and role
  const query = 'SELECT * FROM users WHERE username = ? AND role = ?';
  db.query(query, [username, role], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found or role mismatch' });
    }

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      // Successful login
      res.status(200).json({
        message: 'Login successful',
        user: { id: user.id, username: user.username, role: user.role }
      });
    });
  });
});

  
  db.connect(err => {
    if (err) {
      console.error('Database connection error:', err);
      process.exit(1);
    }
    console.log('Connected to the MySQL database');
  });
  
  // Registration Route..........................................................
  app.post('/register', async (req, res) => {
    const { role, name, password, level, location, experience, fee, age, case_no, type, sentence } = req.body;
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Handle role-based registration
    if (role === 'Judge') {
      const query = `INSERT INTO judges (name, password, level, location) VALUES (?, ?, ?, ?)`;
      db.query(query, [name, hashedPassword, level, location], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Judge registered successfully' });
      });
    } else if (role === 'Lawyer') {
      const query = `INSERT INTO lawyers (name, password, experience, location, fee, age) VALUES (?, ?, ?, ?, ?, ?)`;
      db.query(query, [name, hashedPassword, experience, location, fee, age], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Lawyer registered successfully' });
      });
    } else if (role === 'Accused') {
      const query = `INSERT INTO accused (name, password, case_no, location, type, sentence) VALUES (?, ?, ?, ?, ?, ?)`;
      db.query(query, [name, hashedPassword, case_no, location, type, sentence], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Accused registered successfully' });
      });
    } else {
      res.status(400).json({ message: 'Invalid role specified' });
    }
  });
  ////////////
  // Get Lawyers Data (For Lawyers Page)
  app.get('/lawyers', (req, res) => {
    db.query('SELECT * FROM lawyers', (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', error: err });
      res.status(200).json(results);
    });      
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  /*The line const cors = require('cors'); imports the CORS (Cross-Origin Resource Sharing) middleware in a Node.js/Express application.

  What is CORS?
  CORS is a security feature implemented in browsers that restricts web pages from making requests to a different domain than the one the page was served from.
  
  For example:
  
  If your frontend (React/Vue) runs on http://localhost:3000,
  and your backend API runs on http://localhost:5000,
  a browser will block the request by default due to the Same-Origin Policy.
  CORS allows you to bypass this restriction and permit communication between different origins.
  
  
  To run the server.js filr use:
      node server.js
  
  */
  
  