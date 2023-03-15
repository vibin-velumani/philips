import React,{useEffect, useState} from 'react'
import Item  from './Item'
import { Container, Row } from 'react-bootstrap';
import axios from '../../Api/axios';
import Header from './Header';
import Footer from './Footer';
export const Products = () => {
  const [status,setStatus]=useState(false);
  const [data,setData]=useState();
  const load=async()=>{
    await axios.get('product/getallproducts').then((res)=>{
      setData(res.data.data.products);setStatus(true)
    }).catch((err)=>{console.log(err)})
}

  useEffect(()=>{
load()
  },[])
  


  return (
    <>
    <Header/>
    <Container>
   {
    status?( 
    <Row xs={2} md={3} className="g-4">
    {
        data.map((d,index)=>{
                  return  <><Item key={index} data={d}></Item></>
                           })
     }
    </Row>
    )
:(<h6>Loading ...</h6>)   
   }
   </Container>
   <Footer/>
    </>
  )
}
