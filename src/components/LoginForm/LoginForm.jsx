import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
        role
      });

      // Display success message
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      // Handle error and display error message
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        {/* Username input */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role selection */}
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="Judge"
              checked={role === 'Judge'}
              onChange={handleRoleChange}
            />
            Judge
          </label>
          <label>
            <input
              type="radio"
              value="Lawyer"
              checked={role === 'Lawyer'}
              onChange={handleRoleChange}
            />
            Lawyer
          </label>
          <label>
            <input
              type="radio"
              value="Accused"
              checked={role === 'Accused'}
              onChange={handleRoleChange}
            />
            Accused
          </label>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        {/* Display success or error messages */}
        {success && <div className="success">{success}</div>}
        {error && <div className="error">{error}</div>}

        <div className="register-link">
          <p>Don't have an account? <a href="./Registration">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
