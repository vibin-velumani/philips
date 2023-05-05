import { useContext, useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useAuth } from '../Authentication';
import axios from '../Api/axios';
import '../resources/css/Cart.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import Empty from '../resources/images/cartempty.webp'
import {Row,Col,Image} from 'react-bootstrap';
function Cart() {
  const navigate=useNavigate();
  const [user, setUser] = useState();
  const [trigger, setTrigger] = useState();
  const { user: userString } = useAuth();
  const { _id: id } = JSON.parse(userString);
  const [totalRate, setTotalRate] = useState(0);
 
//  useEffect(async()=>{
//      await axios.post('/auth/updatecartvalue', { id: id, cart: updatedCart });

//  },[totalRate])


  async function removeItemFromCart(productId) {
    const updatedCart = user.cart.filter((item) => item._id !== productId);
    try {
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart,total:totalRate });
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  async function clearCart() {
    if (user.cart.length <= 0) return;
    try {
      await axios.post('/auth/cleancart', { id: id,total:totalRate });
      setTrigger(!trigger);
      setUser({ ...user, cart: [] });
    } catch (err) {
      console.log(err);
    }
  }

  async function increaseQuantity(productId) {
    var tot2=0;
    const updatedCart = user.cart.map((item) => {
      if (item._id === productId) {
        tot2+=item.price*(item.quantity+1);

        return { ...item, quantity: item.quantity + 1 };
      }
      else
      {
        tot2+=item.price*item.quantity;
      }
      return item;
    });
    console.log(tot2);
    try {
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart,total:tot2 });
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  async function decreaseQuantity(productId) {
    // console.log("dec")
    var tot=0;
    const updatedCart = user.cart.map((item) => {
      if (item._id === productId) {
        tot+=item.price*(item.quantity-1);
        return { ...item, quantity: item.quantity - 1 };

      }
      else
      {
        tot+=item.price*item.quantity;
      }
      return item;
    });

    try {
      
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart,total:tot }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  const load = async () => {
    try {
      console.log("working")
      const res = await axios.post('/auth/userdetails', { id: id });
      setUser(res.data.details);
      console.log(res.data.details);
      let total = 0;
      res.data.details.cart.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalRate(total);
    } catch (err) {
      console.log('Something went wrong!!');
    }
  };


  useEffect(() => {
    load();
  }, [trigger]);
  return (
    <>
    {user?.cart?.length ? (
       
       <Container class1="cart-wrapper home-wrapper-2 py-5">
       <div className="row">
         <div className="col-12">
           <div className="cart-header py-3 d-flex justify-content-between align-items-center">
             <h4 className="cart-col-1 " >Product</h4>
             <h4 className="cart-col-2">Price</h4>
             <h4 className="cart-col-3">Quantity</h4>
             <h4 className="cart-col-4">Total</h4>
             <h4 className="cart-col-5">Remove</h4>

           </div>
         </div>
        {user.cart.map((item) => (
           <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center" key={item._id}>
           <div className="cart-col-1 gap-15 d-flex align-items-center">
             <div className="w-25">
               <img src={item.preimg} className="img-fluid" alt="product image" />
             </div>
             <div className="w-75">
               <p>{item.productname}</p>
             </div>
           </div>
           <div className="cart-col-2">
             <h5 className="price">₹ {item.price}</h5>
           </div>
           <div className="cart-col-3 d-flex align-items-center gap-15">
             <div>
               <Card.Text className="cart-card-text">Quantity: {item.quantity}</Card.Text>
               <Button
                variant="primary"
                className="mr-2"
                onClick={() => increaseQuantity(item._id)}
              >
                +
              </Button>
              {"   "}
              <Button
                variant="secondary"
                className="mr-2"
                onClick={() => decreaseQuantity(item._id)}
              >
                -
              </Button>
             </div>
           </div>
           <div className="cart-col-4">
             <h5 className="price">₹ {item.price*item.quantity}</h5>
           </div>
           
           <div className="cart-col-5">
           <AiFillDelete 
  className="text-danger" 
  onClick={() => removeItemFromCart(item._id)}
  style={{ fontSize: '2rem' }} 
/>
           </div>
         </div>
        ))}
        <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
            <Link to="/products" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: ₹ {totalRate}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      ) : (
        <>
         <Container>
      <Row className="justify-content-center mt-5">
        <Col xs="auto">
          <Image src={Empty} fluid />
          <h3 style={{textAlign:"center"}}>Your cart is empty.</h3>
          <br/><br/>
        </Col>
      </Row>
    </Container>
        </>
      )}  
     
    </>
  );

// function decreaseQuantity(itemId) {
//   // Find the item in the cart by its ID
//   const itemIndex = user.cart.findIndex(item => item._id === itemId);
//   // If the item is found and its quantity is greater than 1, decrease the quantity by 1
//   if (itemIndex !== -1 && user.cart[itemIndex].quantity > 1) {
//     const updatedCart = [...user.cart];
//     updatedCart[itemIndex] = { ...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity - 1 };
//     setUser({ ...user, cart: updatedCart });
//   }
// }
}

export default Cart;
