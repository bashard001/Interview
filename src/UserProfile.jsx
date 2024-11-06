import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [state, setState] = useState();

  useEffect(() => {
    // Simulate a 2 Second delay in setting user data
 
      setState({
        user: {
          name: "Alice"
        }
      });
 
  }, []);

  // Second step is to display the user's name or "Loading..."
  return (
    <div>
      <h2>User Profile</h2>
      {/* Safely display the user's name or "Loading..." */}
      <p>Name: { /* Your code here */ }</p>
    </div>
  );
}

export default UserProfile;