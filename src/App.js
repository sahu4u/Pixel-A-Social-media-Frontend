import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Saved from "./pages/saved/Saved"
import {AuthContext} from "./context/AuthContext"
import { Navigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";
import { useContext } from "react";


function App() {
  console.log("Server is running")
  const {user} = useContext(AuthContext)
  return (
   <Router>
      <Routes>
          <Route path="/"
            element={user?<Home/> : <Register/>}
          />
          <Route path="/login"
            element={user?<Navigate to="/"/>:<Login/>}
          />
          <Route path="/register"
            element={user?<Navigate to="/"/>:<Register/>}
            />
          <Route path="/saved"
            element={user ? <Saved/> :<Navigate to="/"/>}
            />
          <Route path="/profile/:username"
            element={user?<Profile/>:<Navigate to="/"/>}
            />
      </Routes>

      
   </Router>
  );
}

export default App;
