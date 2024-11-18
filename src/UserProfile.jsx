import { useState } from 'react';

function UserProfile() {
  const [state, setState] = useState();



    // Simulate a 2 Second delay when the component mounts before setting user data
 
      // setState({
      //       user: {
      //         name: "Alice",
      //         score: 0
      //       } 
      // });
      


  // Second step is to display the user's name or "Loading..."
  return (
    <div>
      <h2>User Profile</h2>
      {/* Safely display the user's name or "Loading..." */}
      <p>Name: { /* Your code here */ }</p>
      <p>Score: { /* Your code here */ }</p>
    </div>
  );
}
//<p>Score: { state.user.score || 'Loading...' }</p>
export default UserProfile;