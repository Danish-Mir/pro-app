import { Navigate  } from 'react-router-dom';
import React from 'react';
const PrivateRoute = ({children}) => {
   const isAuthenticated=true
   console.log("Route works")
  return (
      !isAuthenticated ? <Navigate to='/login'></Navigate> : children
  )
}
export default PrivateRoute;