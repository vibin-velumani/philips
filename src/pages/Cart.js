import { async } from 'q';
import { useContext, useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useAuth } from '../Authentication';
import axios from '../Api/axios';
import { is } from '@babel/types';
function Cart() {
  const [ user, setUser] = useState();
  const [trigger,setTrigger]=useState();
const id=JSON.parse(useAuth().user)._id;
  async function handleRemoveFromCart(productId) {


    const updatedCart = user.cart.filter((item) => item._id !== productId);
    await axios.post('/auth/updatecart',{id:id,cart:updatedCart}).then((res)=>{setTrigger(!trigger)}).catch((err)=>{console.log(err)})
   
    
  }


  async function handleRemoveAllFromCart() {
    if(user.cart.length<=0)
       return;
    await axios.post('/auth/cleancart',{id:id}).then((res)=>{setTrigger(!trigger)}).catch((err)=>{console.log(err)})
    setUser();
}


  const load=async()=>{
    await axios.post('/auth/userdetails',{id:id}).then((res)=>{setUser(res.data.details);console.log(res.data.details)}).catch((err)=>{console.log("Something went wrong!!")})
  }
  useEffect(()=>{
    load()
  },[trigger])
  return (
    <>
    {user===undefined
    ?(<h3>Cart is empty</h3>)
    :(<Container>
      <h1>Cart</h1> 
      <Button style={{float:"right"}} onClick={()=>handleRemoveAllFromCart()}> Clear </Button>
      {user.cart.map((item) => (
        <Card key={item._id} className="mb-3">
          <Card.Body>
            <Card.Title>{item.productname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Price: {item.price}</Card.Subtitle>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
            <Button variant="danger" onClick={()=>handleRemoveFromCart(item._id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>)
    }
    </>
  );
}

export default Cart;
