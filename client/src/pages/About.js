import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Notun Jama"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Notun Jama, your one-stop destination for premium quality products at unbeatable prices. Founded with a passion for excellence and a commitment to customer satisfaction, we curate a diverse range of items to meet all your needs. From the latest fashion trends and cutting-edge electronics to home essentials and unique gifts, we ensure every product in our catalog meets our high standards of quality and value. Our mission is to provide a seamless and enjoyable shopping experience, backed by fast shipping and exceptional customer service. Join our growing community of satisfied customers and discover why Notun Jama is the preferred choice for online shopping.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;