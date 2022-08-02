import React from "react";

function NotUser({ goDashboard, role }) {
  return (
    <>
      <h2 className="roleheading">
        {`You can't access this Dashboard, bcoz you Are ${role}`}
      </h2>
      <div className="rolepagebutton">
        <button onClick={goDashboard}>Go to Home Dashboard</button>
      </div>
    </>
  );
}

export default NotUser;
