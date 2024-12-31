// import React from "react";

// const CategoryForm = ({ handleSubmit, value, setValue }) => {
//   return (
//     <>    
    
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter new category"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default CategoryForm;
import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  const styles = {
    formContainer: {
      backgroundColor: "#123524", // Dark color
      padding: "30px",
      borderRadius: "12px",
      color: "#fff",
      maxWidth: "500px",
      margin: "40px auto",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
    },
    formTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    },
    input: {
      backgroundColor: "#0ddf72", // Light color
      border: "2px solid #123524",
      borderRadius: "8px",
      padding: "12px",
      color: "#123524",
      width: "100%",
      fontSize: "16px",
      marginBottom: "20px",
      boxSizing: "border-box",
      transition: "all 0.3s ease",
    },
    inputFocus: {
      outline: "none",
      boxShadow: "0 0 8px #0ddf72",
    },
    button: {
      backgroundColor: "#0ddf72",
      border: "none",
      borderRadius: "8px",
      padding: "12px 20px",
      color: "#123524",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#123524",
      color: "#fff",
      boxShadow: "0 0 12px #0ddf72",
    },
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Create a New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            style={styles.input}
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.buttonHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, styles.button)
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
