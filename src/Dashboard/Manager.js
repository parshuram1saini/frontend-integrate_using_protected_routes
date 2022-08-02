import React from "react";

function Manager({ goDashboard }) {
  return (
    <>
      <h3>Welcome you are in Manager page</h3>
      <button onClick={goDashboard}>Go to Home Dashboard</button>
    </>
  );
}

export default Manager;
