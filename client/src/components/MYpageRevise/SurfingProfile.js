import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurfingProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Surfing Profile</h1>
      <p>Welcome, {user.name}!</p>
      <p>Your email address is {user.email}.</p>
    </div>
  );
}

export default SurfingProfile;
