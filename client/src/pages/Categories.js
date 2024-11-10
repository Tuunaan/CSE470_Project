import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            /*<div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              { <Link to={`/category/${c.slug}`} className="btn btn-primary custom-bg p-2 text-white text-center">
                {c.name}
              </Link>
            </div>} */
            <div
              className="col-md-6 mt-5 mb-3 gx-3 gy-3"
              key={c._id}
            >
              <Link
                to={`/category/${c.slug}`}
                style={{
                  padding: "12px 24px",
                  fontSize: "3rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  textDecoration: "none",
                  backgroundColor: "#123524",
                  color: "#fff", 
                  textAlign: "center",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                {c.name}
              </Link>
            </div>

          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;