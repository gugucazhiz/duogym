import React, {useState} from "react";
import Login from "./Login";
import './App.css';
import { Button } from "@material-ui/core";
import Register from "./Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Registro</button>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
