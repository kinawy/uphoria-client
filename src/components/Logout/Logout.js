import React, {useState, useEffect} from "react"
import {Redirect} from 'react-router-dom'
// import jwt_decode from "jwt-decode"
import {AUTH_TOKEN} from "../../auth/constant"

const Logout = (props) => {
  const [clearToken, setClearToken] = useState(false)

  // const handleLogout = () => {
  //   localStorage.clear(AUTH_TOKEN)
  //   setClearToken(true)
  // }

  if (!clearToken) {
  return <button onClick={props.handleLogout}>Log-out</button>
  }
    return <Redirect to="/auth"/>
}

export default Logout

// const Logout = () => {
//   let [currentUser, setCurrentUser] = useState("");
//   let [isAuthenticated, setIsAuthenticated] = useState(true);
//
//   useEffect(() => {
//     let token;
//     if (!localStorage.getItem('jwtToken')) {
//       setIsAuthenticated(false);
//     } else {
//       token = jwt_decode(localStorage.getItem(AUTH_TOKEN));
//       console.log("DECODING PROCESS:", token)
//       setCurrentUser(token);
//       setIsAuthenticated(true);
//     }
//   }, []);
//
//   const nowCurrentUser = (userData) => {
//     setCurrentUser(userData);
//     setIsAuthenticated(true);
//   };
//
//   const handleLogout = () => {
//     console.log("this log out button works")
//     if (localStorage.getItem(AUTH_TOKEN)) {
//       localStorage.removeItem(AUTH_TOKEN);
//       setCurrentUser(null);
//       setIsAuthenticated(false);
//     }
//   }
//
//   if (isAuthenticated) {
//     return <Redirect to="/auth"/>
//   }
//    return <button onClick={handleLogout}>Log-out</button>
// }
//
// export default Logout