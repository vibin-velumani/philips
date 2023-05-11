import { Button } from "react-bootstrap";
import React,{useState,useEffect} from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "../../../Api/axios";
import { useAuth } from "../../../Authentication";

const SpecialProduct = ({data}) => {
  console.log(data);
  const id=JSON.parse(useAuth().user)._id;
  const navigate=useNavigate();
  async function addtocart(){
    await axios.post('auth/addcart',{id:id,item:{productname:data.name,productId:data._id,price:data.price,preimg:data.preimg,category:data.category}}).then((res)=>{console.log(res);}).catch((err)=>{
      let v=localStorage.getItem('size');
      localStorage.setItem('size',Number(v)+1);console.log(err);    window.location.reload();  
    
    })
   }

  const [offerdd,setofferdd]=useState(data.offerdd);
  const [offerduetime,setofferduetime]=useState(data.offerduetime);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
 
   useEffect(() => {
    const interval = setInterval(() => {
      const offerDate = new Date(offerdd);
      const now = new Date();
  
      let diff = offerDate.getTime() - now.getTime();
      diff += offerduetime * 1000; // add offerduetime in seconds to diff
      if (diff < 0) {
        clearInterval(interval);
        return;
      }
  
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((diff / 1000 / 60) % 60);
      const secondsLeft = Math.floor((diff / 1000) % 60);
  
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [offerdd, offerduetime]);


  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src={data.preimg} className="img-fluid" alt="" onClick={()=>navigate(`/singleproduct?product=${data._id}`)}/>
            </div>
            <div className="special-product-content" >
              <div style={{marginLeft:10}}>
              <h5 className="brand">BOSCH</h5>
              <h6 className="title">
                {data.name}
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">₹{data.price-data.price*(data.offerper/100)}</span> &nbsp; <strike>₹{data.price}</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
      <p className="mb-0">
        <b>{days} </b>days
      </p>
      <div className="d-flex gap-10 align-items-center">
        <span className="badge rounded-circle p-3 bg-danger">{hours}</span>:
        <span className="badge rounded-circle p-3 bg-danger">{minutes}</span>:
        <span className="badge rounded-circle p-3 bg-danger">{seconds}</span>
      </div>
    </div>
              <div className="prod-count my-3">
                <p>Products: {data.quantity}</p>
                {/* <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}

              </div>
              <Button onClick={addtocart}>Add to Cart</Button>
              {/* <Link className="button">Add to Cart</Link> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
