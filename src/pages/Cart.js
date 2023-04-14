import { useContext, useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useAuth } from '../Authentication';
import axios from '../Api/axios';
import '../resources/css/Cart.css'; 

function Cart() {
  const [user, setUser] = useState();
  const [trigger, setTrigger] = useState();
  const { user: userString } = useAuth();
  const { _id: id } = JSON.parse(userString);
  const [totalRate, setTotalRate] = useState(0);
 
  async function removeItemFromCart(productId) {
    const updatedCart = user.cart.filter((item) => item._id !== productId);
    try {
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart });
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  async function clearCart() {
    if (user.cart.length <= 0) return;
    try {
      await axios.post('/auth/cleancart', { id: id });
      setTrigger(!trigger);
      setUser({ ...user, cart: [] });
    } catch (err) {
      console.log(err);
    }
  }

  async function increaseQuantity(productId) {
    const updatedCart = user.cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    try {
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart });
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  async function decreaseQuantity(productId) {
    const updatedCart = user.cart.map((item) => {
      if (item._id === productId) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item !== null);
    try {
      await axios.post('/auth/updatecart', { id: id, cart: updatedCart });
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  }

  const load = async () => {
    try {
      const res = await axios.post('/auth/userdetails', { id: id });
      setUser(res.data.details);
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
        <Container className="cart-container">
        <h1 className="cart-title">Cart</h1>
        ...
        <div className="cart-total">Total: {totalRate}</div>
        {user.cart.map((item) => (
          <Card key={item._id} className="cart-card">
            <Card.Body>
              <Card.Title className="cart-card-title">{item.productname}</Card.Title>
              <Card.Subtitle className="cart-card-subtitle">Price: {item.price}</Card.Subtitle>
              <Card.Text className="cart-card-text">Quantity: {item.quantity}</Card.Text>
              <div className="cart-buttons">
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => increaseQuantity(item._id)}
                >
                  +
                </Button>
                <Button
                  variant="secondary"
                  className="mr-2"
                  onClick={() => decreaseQuantity(item._id)}
                >
                  -
                </Button>
                <Button
                  variant="danger"
                  onClick={() => removeItemFromCart(item._id)}
                >
                  Remove
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        <Button variant="success" onClick={() => alert("Thank you for your purchase!")}>
          Buy Now
        </Button>
      </Container>
      
      ) : (
        <h3>Cart is empty</h3>
      )}
    </>
  );

function decreaseQuantity(itemId) {
  // Find the item in the cart by its ID
  const itemIndex = user.cart.findIndex(item => item._id === itemId);
  // If the item is found and its quantity is greater than 1, decrease the quantity by 1
  if (itemIndex !== -1 && user.cart[itemIndex].quantity > 1) {
    const updatedCart = [...user.cart];
    updatedCart[itemIndex] = { ...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity - 1 };
    setUser({ ...user, cart: updatedCart });
  }
}
}

export default Cart;
