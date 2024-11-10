import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from 'react-hot-toast';


const HomePage = () => {
  const navigate = useNavigate();
  const [cart,setCart] = useCart()
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


//
//
//

  return (
    <Layout title={"The Arannya Kanon App"}>
      <div className="d-flex 
                      flex-wrap 
                      col-md-2 
                      position-fixed 
                      justify-content-center 
                      align-items-center"
                      style={{
                        border: "2px solid #123524",
                        borderRadius: "8px", 
                        padding: "10px",
                        marginLeft: "20px",
                        background: "#0ddf72",
                      }}
                      
                      >

        <h6 className="custom-bg p-2 text-white text-center">Sort Plants</h6>
        {/* <h4 className="text-center filter-title"> */}
        <div className="filter-section">
        <h6 className="custom-bg p-2 text-white text-center">Sort By Type</h6>
          {categories?.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
              className="filter-checkbox"
            >
              {c.name}
            </Checkbox>
          ))}
        </div>
        <div></div>
        {/* <h4 className="text-center filter-title mt-4"> */}
        <div className="filter-section">
        <h6 className="custom-bg p-2 text-white text-center">Sort By Price</h6>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id} className="filter-radio">
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>

       <div className="d-flex justify-content-center mt-3">
          <button
            className="btn reset-btn"
            onClick={() => window.location.reload()}
          >
            RESET Sorting
          </button>
        </div>
      </div>

        <div className=" offset-1 custom-left-space">
          <h1 className="custom-bg p-2 text-white text-center">All Plants</h1>
          <div className="d-flex flex-wrap"
                style={{
                  border: "2px solid #123524",
                  borderRadius: "8px",
                  padding: "10px", 
                }} 
          >
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "16rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                   Know More
                  </button>
                  <button className="btn btn-secondary ms-1"
                   onClick= {() =>{
                    setCart([...cart,p])
                    localStorage.setItem(
                      'cart',
                      JSON.stringify([...cart, p])
                    )
                    toast.success('Item Added to cart')
                 
                    }}>
                    BUSKET IT
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load more"}
              </button>
            )}
          </div>
        </div>
    </Layout>
  );
};

export default HomePage;