// import React from "react";
// import axios from "../api/axios";
// import useAuth from "./useAuth";

// export default function useRefreshToken() {
//   const { auth, setAuth } = useAuth();
//   const localJWT = localStorage.getItem("accessToken");

//   const refresh = async function () {
//     const response = await axios.get("/accounts/refresh/", {
//       headers: { Authorization: `Bearer ${localJWT}` },
//       withCredentials: true,
//     });
//     setAuth((prev) => {
//       console.log(JSON.stringify(prev));
//       console.log(response.data.data.api_token);
//       const username = response?.data?.data?.id;
//       const fullName = response?.data?.data?.name;
//       const business = response?.data?.data?.business;
//       const role = response?.data?.data?.roles[0].name;
//       let roles = [];
//       roles.push(role);
//       return {
//         ...prev,
//         roles: roles,
//         accessToken: response.data.data.api_token,
//         username: username,
//         fullName: fullName,
//         business: business,
//       };
//     });
//     return response.data.data.api_token;
//   };
//   return refresh;
// }
