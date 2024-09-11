import { useState } from "react";
import "./App.css";
import LogoutComponent from "./components/LogoutComponent/LogoutComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <h1>Password, {user.password}</h1>
          <LogoutComponent onLogout={handleLogout} />
        </div>
      ) : (
        <LoginComponent onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
