import React from "react";
import "./LogoutComponent.css";

const LogoutComponent = ({ onLogout }) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
