
import React, { useState } from 'react';
import axios from 'axios';/*Axios is a promise-based HTTP client for JavaScript. It is used to make asynchronous HTTP requests to interact with APIs or external servers. It works in both browsers and Node.js.*/



import './Registration.css';

const RegistrationForm = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({});
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { ...formData, role });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div >
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select Role</option>
            <option value="Judge">Judge</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Accused">Accused</option>
          </select>
        </label>

        {role && (
          <>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          </>
        )}

        {role === 'Judge' && (
          <>
            <input type="text" name="level" placeholder="Level" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
          </>
        )}

        {role === 'Lawyer' && (
          <>
            <input type="number" name="experience" placeholder="Experience (Years)" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <input type="number" name="fee" placeholder="Fee" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          </>
        )}

        {role === 'Accused' && (
          <>
            <input type="text" name="case_no" placeholder="Case Number" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <select name="type" onChange={handleChange} required>
              <option value="">Select Case Type</option>
              <option value="Cognizable">Cognizable</option>
              <option value="Non-Cognizable">Non-Cognizable</option>
            </select>
            <textarea name="sentence" placeholder="Previous Court Sentences,if applicable" onChange={handleChange}></textarea>
          </>
        )}

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
