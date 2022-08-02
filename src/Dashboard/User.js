import React from 'react'

function User({goDashboard}) {
  return (
    <div>
        <h3>welcome you are User page</h3>
        <button onClick={goDashboard}>Go to Home Dashboard</button>
    </div>
  )
}
export default User