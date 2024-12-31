// import React, {useState, useEffect} from "react";
// import Layout from "../../components/Layout/Layout";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import {Select} from "antd";
// import Upload from './../../../node_modules/antd/es/upload/index';
// import {useNavigate} from "react-router-dom";

// const {Option}= Select; //to create drop down menu

// const CreateProduct = () => {
//   const navigate = useNavigate()
//   const [categories, setCategories] = useState([])
//   const [name, setName] = useState("")
//   const [description, setDescription] = useState("")
//   const [price, setPrice] = useState("")
//   const [category, setCategory] = useState("")
//   const [quantity, setQuantity] = useState("")
//   const [shipping, setShipping] = useState("")
//   const [photo, setPhoto] =useState("")
  
//   //get all category
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/category/get-category");
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting category");
//     }
//   };
//   useEffect(() => {
//     getAllCategory();
//   }, []);


//   //create product function
//   const handleCreate= async (e) => {
//     e.preventDefault()
//     try{
//       const productData = new FormData()
//       productData.append("name", name)
//       productData.append("description", description)
//       productData.append("price", price)
//       productData.append("quantity", quantity)
//       productData.append("photo", photo)
//       productData.append("category", category)
//       const {data}= axios.post('/api/v1/product/create-product',productData);
//       if(data?.success){
//         toast.error(data?.message);
//       }else{
//         toast.success('Product Created Successfully');
//         navigate('/dashboard/admin/products');
//       }
//     }
//     catch(error){
//       console.log(error);
//       toast.error('something went wrong');
//     }
//   };

//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//           <h1 className="custom-bg p-2 text-white text-center">Create Plant</h1>
//             <div className ="m-1 w-75">
//               <Select bordered={false} 
//               placeholder="Select Category" 
//               size="large" 
//               showSearch 
//               className="form-select mb-3" 
//               onChange={(value)=>{
//                 setCategory(value)
//                 }}
//               >
//               {categories?.map((c) => (
//                 <Option key={c._id} value={c._id}>
//                   {c.name}
//                 </Option>
//               ))}
//               </Select>
//               <div className="mb-3">
//                 <label  className="btn btn-outline-secondary col-md-12">
//                   {photo ? photo.name : "Upload Photo" }
//                 <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden></input>
//                 </label>
//               </div>
//               <div className="mb-3">
//                 {photo && (
//                   <div className="text-center">
//                     <img 
//                       src={URL.createObjectURL(photo)} 
//                       alt="product-photo" height={"200px"} 
//                       className="img img-responsive"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <input 
//                    type="text"
//                    value={name}
//                    placeholder="Name of the Plant"
//                    className="form-control"
//                    onChange={(e)=> setName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input 
//                    type="text"
//                    value={description}
//                    placeholder="Description about the Plant"
//                    className="form-control"
//                    onChange={(e)=> setDescription(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input 
//                    type="number"
//                    value={price}
//                    placeholder="Plant Price"
//                    className="form-control"
//                    onChange={(e)=> setPrice(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input 
//                    type="number"
//                    value={quantity}
//                    placeholder="Plant Quantity"
//                    className="form-control"
//                    onChange={(e)=> setQuantity(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <Select 
//                    bordered={false}
//                    placeholder="Select Shipping"
//                    size="large"
//                    showSearch
//                    className="form-control"
//                    onChange={(value)=> {
//                     setShipping(value);
//                   }}
//                 >
//                   <Option value="0">No</Option>
//                   <Option value="1">Yes</Option>

//                 </Select>
//                 </div>
//                 <div className="mt-3">
//                   <button className="btn btn-primary" onClick={handleCreate}>CREATE</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </Layout>
//   );
// };

// export default CreateProduct;
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post("/api/v1/product/create-product", productData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="create-product-container container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="custom-bg p-2 text-white text-center">Create Plant</h1>
            <div className="create-product-form m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select Type of the Plant"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product-photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Name of the Plant"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={description}
                  placeholder="Description about the Plant"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Plant Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Plant Quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping"
                  size="large"
                  showSearch
                  className="form-control"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .create-product-container {
            border-radius: 15px;
            padding: 20px;
            color: #123524;
          }

          .create-product-form {
            background: #f4f4f9;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .create-product-form input,
          .create-product-form .form-select {
            border: 2px solid #123524;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 15px;
          }

          .create-product-form button {
            background-color: #123524;
            border: none;
            color: #fff;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .create-product-form button:hover {
            background-color: #123524;
            color: #0ddf72;
            transform: scale(1.05);
          }

          .create-product-container h1 {
            background: #123524;
            padding: 15px;
            border-radius: 8px;
            color: #123524;
          }
        `}
      </style>
    </Layout>
  );
};

export default CreateProduct;
