import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/threeladies.jpeg"
            alt="contactus"
            style={{ width: "68%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          🎨 Customization Services: At Notun Jama, we believe in celebrating individuality. That’s why we offer personalized customization options. Want a dress with specific embroidery or a unique color combination? Our skilled artisans can bring your vision to life. From bridal wear to everyday essentials, we tailor garments that reflect your personality.
          </p>
          <p className="text-justify mt-2">
          🛒 Seamless Shopping Experience: Navigate our user-friendly app effortlessly. Browse by category, filter by size, color, or style, and add your favorite pieces to the cart. Our secure checkout process ensures a smooth transaction, and our responsive customer support team is always ready to assist.
          </p>
          <p className="text-justify mt-2">
          👗 Women’s Fashion Collection: Explore our diverse range of clothing, from casual wear to formal attire. Discover flowy maxi dresses, tailored blazers, comfy loungewear, and everything in between. Our team of fashion enthusiasts handpicks each item to ensure quality, comfort, and flair.
          </p>

        </div>
      </div>
    </Layout>
  );
};

export default About;
