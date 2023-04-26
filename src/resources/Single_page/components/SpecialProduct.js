import { Button } from "react-bootstrap";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const SpecialProduct = ({data}) => {
  console.log(data);
  const navigate=useNavigate();
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
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: {data.quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

              </div>
              <Button>Add to Cart</Button>
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
