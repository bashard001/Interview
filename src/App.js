import './App.css';
import UserProfile from './UserProfile';
import Timer from './Timer';
import { UserProvider } from './user-context/user';
import DisplayUser from './DisplayUser';

function App() {
  return (
    <UserProvider>
    <div className="App">
    <DisplayUser />
      {/* <Timer /> */}
        {/* <UserProfile /> */}
    </div>
    </UserProvider>
  );
}

export default App;
