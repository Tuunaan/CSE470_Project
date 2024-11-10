import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="custom-bg p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
          About our company:</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;