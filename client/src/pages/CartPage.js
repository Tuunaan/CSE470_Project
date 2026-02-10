import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Payment from "./../components/Form/PaymentForm";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [showAddressForm, setShowAddressForm] = useState(false); // State to toggle the address form
  const [newAddress, setNewAddress] = useState(auth?.user?.address || ""); // Single string for the address
  const [address, setAddress] = useState(""); // State for the current delivery address

  // Fetch current address when the component mounts
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { data } = await axios.get("/api/v1/auth/delivery-address");
        if (data?.deliveryAddress) {
          setAddress(data.deliveryAddress);
          console.log(data.deliveryAddress);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error fetching delivery address");
      }
    };

    if (auth?.token) {
      fetchAddress();
    }
  }, [auth?.token]);

  // Form submission for updating the address
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/delivery-address", {
        deliveryAddress: newAddress, // Send the full address as a single string
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAddress(newAddress); // Update the current address displayed
        toast.success("New Address Updated Successfully");
        setShowAddressForm(false); // Close the form after submission
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Total Price Calculation
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Cart Item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 card flex-row" key={p._id}>
                <div className="col-md-4">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="col-md-8">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price: {p.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total: {totalPrice()} </h4>
            {auth?.user?.address && !showAddressForm ? (
              <div className="mb-3">
                <h4>Current Address</h4>
                <p>{address}</p>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => setShowAddressForm(true)}
                >
                  Update Address
                </button>
                <Payment total={totalPrice()} />
              </div>
            ) : showAddressForm ? (
              <form
                onSubmit={handleSubmit}
                className="card p-3 border rounded shadow-sm"
                style={{ maxWidth: "400px", margin: "0 auto" }}
              >
                <h5 className="mb-3">Update Delivery Address</h5>
                <div className="mb-3">
                  <label className="form-label">New Address</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setShowAddressForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
