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
          <p>Our privacy policy:   </p>
          <p>1) Privacy policy 1</p>
          <p>2) Privacy policy 2</p>
          <p>2) Privacy policy 3</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;