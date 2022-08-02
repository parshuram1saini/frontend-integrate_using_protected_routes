import React from "react";

function Admin({ goDashboard }) {
  return (
    <>
      <h3>Welcome you are in Admin page</h3>
      <button onClick={() => goDashboard()}>Go to Home Dashboard</button>
    </>
  );
}

export default Admin;
