import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policies"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
        <h1 className="custom-bg p-2 text-white text-center">Our Policy</h1>
          <p>Our privacy policy</p>
          <p>Our privacy policy</p>
          <p>Our privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;