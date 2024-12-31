// import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";
// import { useAuth } from "../../context/auth";
// const AdminDashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//             <h1 className="custom-bg p-2 text-white text-center">Admin Info</h1>
//               <h3> Admin's Name : {auth?.user?.name}</h3>
//               <h3> Admin's Email : {auth?.user?.email}</h3>
//               <h3> Admin's Contact : {auth?.user?.phone}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminDashboard;
import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="admin-dashboard-container container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="admin-info-card card w-75 p-3">
              <h1 className="admin-info-title text-white text-center">
                Admin Info
              </h1>
              <h3>
                <span className="info-label">Admin's Name:</span> {auth?.user?.name}
              </h3>
              <h3>
                <span className="info-label">Admin's Email:</span> {auth?.user?.email}
              </h3>
              <h3>
                <span className="info-label">Admin's Contact:</span> {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Main container styling */
          .admin-dashboard-container {
            background: linear-gradient(135deg, #123524 30%, #0ddf72 100%);
            border-radius: 15px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
            padding: 20px;
            color: #fff;
          }

          /* Admin info card */
          .admin-info-card {
            background: #123524;
            border: none;
            border-radius: 15px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Card title styling */
          .admin-info-title {
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
          .admin-info-card:hover {
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

export default AdminDashboard;
