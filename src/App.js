import React, { useState, useEffect } from "react";
import Login from "./FormView/Login";
import Home from "./FormView/Home";
import User from "./Dashboard/User";
import Admin from "./Dashboard/Admin";
import Manager from "./Dashboard/Manager";
import Signup from "./FormView/Signup";
import NotRole from "./Dashboard/NotRole";
import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./protected/ProtectedRoutes";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const goDashboard = () => {
    console.log("godashboard");
    // <Navigate to="/home"/>;
    navigate("/home", { replace: true });
  };
  // useEffect(() => {
  // goDashboard();
  // });
  return (
    <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login getLoginEmail={setEmail} setIsAuth={setIsAuth} />}
          ></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <Home
                  email={email}
                  setrole={setRole}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            exact
            path="/user"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <User goDashboard={goDashboard} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            exact
            path="/manager"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <Manager goDashboard={goDashboard} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            exact
            path="/admin"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <Admin goDashboard={goDashboard} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            exact
            path="/role"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <NotRole goDashboard={goDashboard} role={role} />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>

    </div>
  );
}

export default App;
