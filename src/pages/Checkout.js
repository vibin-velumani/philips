import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../resources/Single_page/components/Container";
import axios from "../Api/axios";
import { useAuth } from "../Authentication";
import { TiTickOutline } from 'react-icons/ti';
import { Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';

export default function Checkout() {



  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];
  










  const [paymentMethod, setPaymentMethod] = useState("COD");

  const navigate=useNavigate();

  const [shippingAddress, setshippingAddress] = useState([]);
  const[deliveryChoice,setdelivery]=useState(-1);
  const[name,setname]=useState();
  const [total, settotal] = useState(0);



  const placeOrder=async()=>{
    console.log(total)
          await axios.post('/order/placeorder',{uid:id,address:shippingAddress[deliveryChoice],payment:paymentMethod,value:total}).then((res)=>{console.log(res);toast.success("Order Placed Successfully"); setTimeout(()=>{
   navigate('/')

          },[3000])}).catch((err)=>{console.log(err)})
  }





  const [cart, setcart] = useState([]);
  const user = useAuth().user;
  const id = JSON.parse(user)._id;
  console.log(id);
const[flag,setflag]=useState(true);
 

  const[ph,setph]=useState();
  const[address,setaddress]=useState()
  const[landmark,setlandmark]=useState()
  const[state,setstate]=useState()
  const[city,setcity]=useState();
  const[zipcode,setzipcode]=useState();


  const [card,setcard]=useState(false);


  const pay = (e)=>{
    e.preventDefault();
    if(total<=0){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_AhlqkIORKwkNpo",
        key_secret:"4v44yQbrTCawMlri1JQZSIzV",
        amount: total*100,
        currency:"INR",
        name:"Crystal Parts",
        description:"for payment",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Subash",
          email:"corerido@gmail.com",
          contact:"8778732697"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }



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
    <>
                <ToastContainer />

    {
      
    flag?
    (
      <>
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
      <select
        className="form-control"
        value={state}
        onChange={(e) => setstate(e.target.value)}
      >
        <option value="">Select a state</option>
        {stateOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
                <Button onClick={()=>setflag(false)} className="button" variant="success">
                  Continue to Shipping
                </Button>
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
                
                <Button onClick={()=>setflag(false)} className="button" variant="success">
                  Continue to Shipping
                </Button>
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
  </>):(
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
          

          <h4 className="mb-3">Payment Details</h4>
        {/* {add here} */}
        

        



          
        <Form >
        <Form.Group controlId="paymentMethod">
          <Form.Label>Payment Method : {paymentMethod}</Form.Label>
          <br/>
          <Button onClick={()=>{setPaymentMethod("COD");setcard(false)}} >Cash On Delivery</Button>{" "}
          
          <Button onClick={()=>{setPaymentMethod("DC");setcard(true)}}>Debit Card</Button>{" "}

          <Button onClick={pay}>UPI</Button>{" "}

          
          <Button onClick={()=>{setPaymentMethod("BTC");setcard(false)}} disabled>Bitcoin</Button>{" "}
        </Form.Group>
        <br/><br/>
      </Form>


        {card &&  
         <form action="">
         <div class="mb-3">
             <p class="dis fw-bold mb-2">Email address</p>
             <input class="form-control" type="email"/>
         </div>
         <div>
             <p class="dis fw-bold mb-2">Card details</p>
             <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                 <div class="fab fa-cc-visa ps-3"></div>
                 <input type="text" class="form-control" placeholder="Card Details"/>
                 <div class="d-flex w-50">
                     <input type="text" class="form-control px-0" placeholder="MM/YY"/>
                     <input type="password" maxlength={3} class="form-control px-0" placeholder="CVV"/>
                 </div>
             </div>
             <div class="my-3 cardname">
                 <p class="dis fw-bold mb-2">Cardholder name</p>
                 <input class="form-control" type="text"/>
             </div>
             <div class="address">
                 <p class="dis fw-bold mb-3">Billing address</p>
                 <select class="form-select" aria-label="Default select example">
                     <option selected hidden>Tamil Nadu</option>
                     <option value="1">Tamil Nadu</option>
                     <option value="2">Kerala</option>
                     <option value="3">Karnataka</option>
                 </select>
                 <div class="d-flex">
                     <input class="form-control zip" type="text" placeholder="ZIP"/>
                     <input class="form-control state" type="text" placeholder="State"/>
                 </div>
                 <div class=" my-3">
                     <p class="dis fw-bold mb-2">VAT Number</p>
                     <div class="inputWithcheck">
                         <input class="form-control" type="text" value="GB012345B9"/>
                         <span class="fas fa-check"></span>

                     </div>
                 </div>
                 <div class="d-flex flex-column dis">
                     <div class="d-flex align-items-center justify-content-between mb-2">
                         <p>Subtotal</p>
                         <p><span class="fas fa-inr"> </span>₹ {total}</p>
                     </div>
                     <div class="d-flex align-items-center justify-content-between mb-2">
                         <p>VAT<span>(2%)</span></p>
                         <p><span class="fas fa-inr"></span>₹ {total*(2/100)}</p>
                     </div>
                     <div class="d-flex align-items-center justify-content-between mb-2">
                         <p class="fw-bold">Total</p>
                         <p class="fw-bold"><span class="fas fa-inr"></span>₹ {Number(total)+Number(total*(2/100))}</p>
                     </div>
                     <div class="btn btn-primary mt-2">Pay<span class="fas px-1"></span>₹ {Number(total)+Number(total*(2/100))}
                     </div>
                 </div>
             </div>
         </div>
         <br/><br/>
     </form>
        }
          


          <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                
                <Button onClick={()=>setflag(true)} className="button" variant="success">
                <BiArrowBack className="me-2" />
                Return to Shipping
                </Button>
                <Button className="button" variant="success" onClick={placeOrder}>
                  Place Order
                </Button>
                
              </div>
            </div>
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





  )



    }
    </>
  );
}
