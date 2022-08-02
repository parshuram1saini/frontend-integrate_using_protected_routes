import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ email, setrole, isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  // const [paramsemail, setParamsEmail] = useState("");
  // const getEmployee=()=>{
  // axios.get("/api/user/getemployee")
  // .then((response)=>{
  //     console.log(response.data)
  // }).catch(error=>{
  //   console.log(error.message)
  // })
  // }
  useEffect(() => {
    console.log(email);
    if (!isAuth) {
      navigate("/");
    }
    //  getEmployee()
    // axios
    //   .get("/api/user/getemployee", {
    //     params: {
    //       email: email,
    //     },
    //   })
    axios
      .get(`/api/user/getemployee/${email}`)
      .then((response) => {
        console.log(typeof response.data.message.role);
        setRole(response.data.message.role);
        setrole(response.data.message.role);
        // setParamsEmail(email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  const goLogout = () => {
    setIsAuth(false);
    navigate("/");
  };
  const handleUser = () => {
    console.log("role rendered");
    navigate("/" + role);
  };
  return (
    <>
      <h2 className="dashboard">Dashboard</h2>
      <div className="logoutPanel">
        <button className="ui big blue submit button" onClick={goLogout}>
          Logout
        </button>
      </div>
      <nav>
        <ul>
          <li
            onClick={() => {
              if (role === "User") {
                handleUser();
              } else {
                navigate("/role");
              }
            }}
          >
            User
          </li>
          <li
            onClick={() => {
              if (role === "Admin") {
                handleUser();
              } else {
                navigate("/role");
              }
            }}
          >
            Admin
          </li>
          <li
            onClick={() => {
              if (role === "Manager") {
                handleUser();
              } else {
                navigate("/role");
              }
            }}
          >
            Manager
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Home;
