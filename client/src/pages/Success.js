import React from "react";
import Layout from "./../components/Layout/Layout";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <Layout>
      <div class="bg-gray-100 h-screen">
        <div class="bg-white p-6  md:mx-auto">
          <div class="text-center">
            <CiCircleCheck size={200} />
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <Link
                to="/"
                class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
