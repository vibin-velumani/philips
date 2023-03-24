import React,{useEffect, useState} from 'react'
import Item  from './Item'
import { Container, Row,Col } from 'react-bootstrap';
import axios from '../../Api/axios';
import '../css/products.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Products = () => {
  const [status,setStatus]=useState(false);
  const [data,setData]=useState();
  const [fil,setFil]=useState();
  const [search,setSearch]=useState();
  const [currentPage,setCurrentPage]=useState(0);
  const load=async()=>{
    await axios.get('product/getallproducts').then((res)=>{
      setData(res.data.data.products);setStatus(true);
      setFil(res.data.data.products);
    }).catch((err)=>{console.log(err)})
}

  useEffect(()=>{
load()
  },[])
  console.log(data);



  const searchFilter=async()=>{
    if(search.length===0)
    {
        setFil(data);
    }
    else
    {
    const d=await fil.filter((data,index)=>{
      if (
       data.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return data;
      }
    })
    setFil(d);
  }
  }

  return (
    <>
    <Container>
       <br/>
      <Row>
        
      <Col md={4} xs={1} sm={1}>
        </Col>

        <Col md={4} xs={10} sm={10}>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              width={50}
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="success" onClick={searchFilter}>Search</Button>
          </Form>
          </Col>
          
        <Col md={4} xs={1} sm={1}>
        </Col>
    </Row>
    <br/>
   {
    status?( 
    <>
    <Row xs={2} md={3} className="g-4">
    {
        fil.slice(currentPage*12,currentPage*12+12).map((d,index)=>{
                  return  <><Item key={index} data={d}></Item></>
                           })
     }
        </Row>
        <br/>
        <Row>

<Col md={4} xs={1} sm={1}>
        </Col>

        <Col md={4} xs={10} sm={10}>
        {
    (currentPage>0)?(<Button  onClick={()=>setCurrentPage(currentPage-1)} variant="success">Prev Page</Button>):(<></>)
}
{
  
  (currentPage*12+12<fil.length)?(<Button onClick={()=>setCurrentPage(currentPage+1)} variant="success">Next Page</Button>):(<></>)
}
          </Col>
          
        <Col md={4} xs={1} sm={1}>
        </Col>
</Row>
       </>
    
    )
:(<h6>Loading ...</h6>)   
   }
   </Container>
    </>
  )
}