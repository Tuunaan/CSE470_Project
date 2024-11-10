import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="custom-bg p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <b>Contact us here:</b>
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@tunan_app.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 2000-2010-2020 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;