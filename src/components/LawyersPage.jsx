import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/lawyers');
        setLawyers(response.data);
      } catch (err) {
        console.error('Failed to fetch lawyers:', err);
      }
    };

    fetchLawyers();
  }, []);

  return (
    <div>
      <h1>Lawyers List</h1>
      <ul>
        {lawyers.map((lawyer) => (
          <li key={lawyer.id}>
            <p>Name: {lawyer.name}</p>
            <p>Experience: {lawyer.experience} years</p>
            <p>Location: {lawyer.location}</p>
            <p>Fee: {lawyer.fee}</p>
            <p>Age: {lawyer.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyersPage;
