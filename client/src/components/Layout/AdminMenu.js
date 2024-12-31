// import React from "react";
// import { NavLink } from "react-router-dom";
// const AdminMenu = () => {
//   return (
//     <>
//       <div className="text-center">
//         <div className="list-group">
//           <h4>Admin Panel</h4>
//           <NavLink
//             to="/dashboard/admin/create-category"
//             className="list-group-item list-group-item-action"
//           >
//             Create Category
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/create-product"
//             className="list-group-item list-group-item-action"
//           >
//             Create Product
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/products"
//             className="list-group-item list-group-item-action"
//           >
//             Product
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/users"
//             className="list-group-item list-group-item-action"
//           >
//             Users
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminMenu;
import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#123524", // Dark color
      padding: "20px",
      borderRadius: "12px",
      color: "#fff",
      maxWidth: "400px",
      margin: "40px auto",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    },
    listGroup: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      display: "block",
      backgroundColor: "#0ddf72", // Light color
      border: "2px solid #123524",
      borderRadius: "8px",
      padding: "10px",
      color: "#123524",
      marginBottom: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
      transition: "all 0.3s ease",
    },
    listItemHover: {
      backgroundColor: "#123524",
      color: "#fff",
      boxShadow: "0 0 12px #0ddf72",
    },
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.header}>Admin Panel</h4>
      <div style={styles.listGroup}>
        <NavLink
          to="/dashboard/admin/create-category"
          style={styles.listItem}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.listItemHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, styles.listItem)
          }
        >
          Create New Type
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          style={styles.listItem}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.listItemHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, styles.listItem)
          }
        >
          Create New Plant
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          style={styles.listItem}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.listItemHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, styles.listItem)
          }
        >
          Plants
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          style={styles.listItem}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.listItemHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, styles.listItem)
          }
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
