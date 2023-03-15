import React from 'react'
import Footer from '../resources/components/Footer'
import Header from '../resources/components/Header'

export const Profile = () => {
  return (
    <>
  <Header />
  
    <div>Profile
    <p>Name: </p>
      <p>Email: </p>
      <p>Address: </p>
      <p>Phone Number: </p>
      <p>Order History:</p>
      </div>
    
  <Footer/>
    </>
    )
}

// import React, { useState, useEffect } from "react";

// const UserProfile = () => {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     // Fetch user data from API
//     fetch("https://example.com/api/user")
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Address: {user.address}</p>
//       <p>Phone Number: {user.phoneNumber}</p>
//       <p>Order History:</p>
//       <ul>
//         {user.orders &&
//           user.orders.map((order) => (
//             <li key={order.id}>
//               Order {order.id} - {order.total} USD
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default UserProfile;
