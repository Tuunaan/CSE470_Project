// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// const Dashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout title={"Dashboard"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//             <h1 className="custom-bg p-2 text-white text-center">User Info</h1>
//             <h3> Name : {auth?.user?.name}</h3>
//               <h3> Email: {auth?.user?.email}</h3>
//               <h3> Address: {auth?.user?.address}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;
import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard"}>
      <div className="user-dashboard-container container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="user-info-card card w-75 p-3">
              <h1 className="user-info-title text-white text-center">
                User Info
              </h1>
              <h3>
                <span className="info-label">Name:</span> {auth?.user?.name}
              </h3>
              <h3>
                <span className="info-label">Email:</span> {auth?.user?.email}
              </h3>
              <h3>
                <span className="info-label">Address:</span> {auth?.user?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Main container styling */
          .user-dashboard-container {
            background: linear-gradient(135deg, #123524 30%, #0ddf72 100%);
            border-radius: 15px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
            padding: 20px;
            color: #fff;
          }

          /* User info card */
          .user-info-card {
            background: #123524;
            border: none;
            border-radius: 15px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Card title styling */
          .user-info-title {
            background-color: #0ddf72;
            padding: 15px;
            border-radius: 10px;
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
          }

          /* Highlight labels */
          .info-label {
            color: #0ddf72;
            font-weight: bold;
          }

          /* Smooth hover for entire card */
          .user-info-card:hover {
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.4);
          }

          /* Animation keyframes */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Dashboard;
