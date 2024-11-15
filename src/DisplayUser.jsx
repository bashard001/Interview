import { useUser } from "./user-context/user";

function DisplayUser() {
    const { userState, setRerender } = useUser();

      


  // Second step is to display the user's name or "Loading..."
  return (
    <div>
      <h2>User Profile</h2>
      {/* Safely display the user's name or "Loading..." */}
      <p>Name: { userState?.user?.name }</p>
      <p>Score: { /* Your code here */ }</p>
      <button onClick={() => setRerender(Date())}>test fetch only called once</button>
    </div>
  );
}

export default DisplayUser;