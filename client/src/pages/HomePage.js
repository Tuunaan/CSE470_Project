import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";

// <<<<<<< HEAD
// const About = () => {
//   return (
//     <Layout title={"About us - Ecommer app"}>
//       <div className="row contactus">
//         <div className="col-md-6">
//           <img
//             src="/images/threeladies.jpeg"
//             alt="contactus"
//             style={{ width: "68%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <p className="text-justify mt-2 montserrat-font">
//           </p>
//         </div>
//       </div>
// =======
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers "}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
