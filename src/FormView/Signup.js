import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [role, setRole] = useState("");
  console.log(email, password, role);

  const navigate = useNavigate();
  ///-------post request----------////

  const handlesubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/api/user/addemployees",
      data: {
        email: email,
        password: password,
        role: role,
      },
    })
      .then((response) => {
        if (response.ok) {
          navigate("/");
        }
        console.log("successfull submitted", response);
      })
      .catch((error) => {
        console.log(error);
      });

    // const data = { email, password, role };
    // console.log(data);
    // fetch("/api/user/addemployees", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password, role }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Successfully registered", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <form className="signup">
        <div className="ui placeholder segment">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Role</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setRole(e.target.value)}
                ></input>
              </div>
              {/* <Link to="/"> */}
              <button
                className="ui big blue submit button"
                type="submit"
                onClick={(e) => handlesubmit(e)}
              >
                Register
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
