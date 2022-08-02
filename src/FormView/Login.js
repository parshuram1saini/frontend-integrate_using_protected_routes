import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login({getLoginEmail,setIsAuth}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  function handleLogin(e) {
    e.preventDefault();
    console.log(email, typeof password);
    fetch("/api/user/getemployee", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(response.status);
        if (response.ok) {
          setIsAuth(true)
          getLoginEmail(email)
          navigate("/home");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form className="loginform">
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input
                      type="email"
                      placeholder="Username"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <i className="lock icon"></i>
                  </div>
                </div>
                <button
                  className="ui big blue submit button"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="middle aligned column">
              <Link to="/signup">
                <div className="ui big blue submit button">
                  <div>Don't have account ..</div>
                  <i className="signup icon"></i>
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </form>
    </div>
  );
}
export default Login;
