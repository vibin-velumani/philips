import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../resources/Single_page/components/Container";
import axios from "../Api/axios";
import { useAuth } from "../Authentication";
import { TiTickOutline } from 'react-icons/ti';
export default function Checkout() {
  const [shippingAddress, setshippingAddress] = useState([]);
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState();
  const user = useAuth().user;
  const id = JSON.parse(user)._id;
  console.log(id);

 

  const[deliveryChoice,setdelivery]=useState(-1);
  const[name,setname]=useState();
  const[ph,setph]=useState();
  const[address,setaddress]=useState()
  const[landmark,setlandmark]=useState()
  const[state,setstate]=useState()
  const[city,setcity]=useState();
  const[zipcode,setzipcode]=useState();



  const load = async () => {
    await axios
      .post("/auth/checkoutdetails", { id })
      .then((res) => {
        console.log(res.data.data);
        settotal(res.data.data.cartValue);
        setshippingAddress(res.data.data.shipping);
        setcart(res.data.data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    load();
  }, []);

  const saveaddress=async(req,res)=>{
    await axios.post('/auth/addaddress',{id,deliveryChoice:0,item:{
      name,ph,address,landmark,state,city,zipcode
    }}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  }
  return (
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-7">
          <div className="checkout-left-data">
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="text-dark total-price" to="/cart">
                    Cart
                  </Link>
                </li>
                &nbsp; /&nbsp;
                <li
                  className="breadcrumb-ite total-price active"
                  aria-current="page"
                >
                  Information
                </li>
                &nbsp; /
                <li className="breadcrumb-item total-price active">Shipping</li>
                &nbsp; /
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Payment
                </li>
              </ol>
            </nav>
            <h4 className="title total">Shipping Information</h4>
            <p className="user-details total">
              {shippingAddress.map((data, index) => (
                <div key={index}>
                  <p onClick={()=>setdelivery(index)}><TiTickOutline/> {data.address}</p>
                </div>
              ))}
              <p onClick={()=>setdelivery(-1)}><TiTickOutline/> New Address</p>

            </p>

            <h4 className="mb-3">Delivery Address</h4>
            {deliveryChoice<0?(
              <form
              action=""
              className="d-flex gap-15 flex-wrap justify-content-between"
            >
             
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Phone No"
                  className="form-control"
                  value={ph}
                  onChange={(e)=>setph(e.target.value)}
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={address}
                  onChange={(e)=>setaddress(e.target.value)}
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Apartment, Suite ,etc"
                  className="form-control"
                  value={landmark}
                  onChange={(e)=>setlandmark(e.target.value)}
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  value={city}
                  onChange={(e)=>setcity(e.target.value)}
                />
              </div>
              <div className="flex-grow-1">
              <input
                  type="text"
                  placeholder="State"
                  className="form-control"
                  value={state}
                  onChange={(e)=>setstate(e.target.value)}
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="form-control"
                  value={zipcode}
                  onChange={(e)=>setzipcode(e.target.value)}
                />
              </div>
              <label for="save">Save for later</label>
              <input type="checkbox" id="save" onClick={saveaddress}></input>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack className="me-2" />
                    Return to Cart
                  </Link>
                  <Link to="/cart" className="button">
                    Continue to Shipping
                  </Link>
                </div>
              </div>
            </form>
            ):(
              <form
              action=""
              className="d-flex gap-15 flex-wrap justify-content-between"
            >
             
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].name}
                  readOnly
                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Phone No"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].ph}
                  readOnly
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].address}
                  readOnly

                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Apartment, Suite ,etc"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].landmark}
                  readOnly

                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].city}
                  readOnly

                />
              </div>
              <div className="flex-grow-1">
              <input
                  type="text"
                  placeholder="State"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].state}
                  readOnly

                />
              </div>
              <div className="flex-grow-1">
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="form-control"
                  value={shippingAddress[deliveryChoice].zipcode}
                  readOnly

                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="text-dark">
                    <BiArrowBack className="me-2" />
                    Return to Cart
                  </Link>
                  <Link to="/cart" className="button">
                    Continue to Shipping
                  </Link>
                </div>
              </div>
            </form>
            )
            }
          </div>
        </div>
        <div className="col-5">
          {cart.map((data, index) => {
            return (
              <div className="border-bottom py-4" key={index}>
                <div className="d-flex gap-10 mb-2 align-align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        {data.quantity}
                      </span>
                      <img
                        className="img-fluid"
                        src={data.preimg}
                        alt="product"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">{data.productname}</h5>
                      <p className="total-price">
                        {" "}
                        {data.quantity} x ₹ {data.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">₹ {data.price * data.quantity}</h5>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-bottom py-4">
            <div className="d-flex justify-content-between align-items-center">
              <p className="total">Subtotal</p>
              <p className="total-price">₹ {total}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 total">Shipping</p>
              <p className="mb-0 total-price">₹ 50</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bootom py-4">
            <h4 className="total">Total</h4>
            <h5 className="total-price">₹ {Number(total) + Number(50)}</h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
