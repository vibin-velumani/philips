import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory,{textFilter}  from 'react-bootstrap-table2-filter'
import axios from '../../Api/axios'
import paginationFactory from 'react-bootstrap-table2-paginator';  
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import CustomButton from 'reactjs-popup'
import style from '../Admin_css/UpdateProduct.module.css';
import Update from '../Admin_components/Update';
export default function UpdateProduct() {

const [row,setRow]=useState();

const [status,setstatus]=useState(true)
const [data,setData]=useState({
    columns: [
        {
            dataField: 'id',
            text:'Id ',
            sort:true
          },
    {
      dataField: 'name',
      text:'Name ',
      filter:textFilter()
    },
   
    {
        dataField: 'desc',
        text:'Description',
    }, 
    {
        dataField: 'price',
        text:'Price',
        sort:true

    },
    {
        dataField: 'category',
        text:'Category',
    },
    {
        dataField: 'quantity',
        text:'Quantity',
        sort:true

    },
    {
        dataField: 'offer',
        text:'Offer',
        sort:true

    }
  ],
rows: []


})
const load=async()=>{
      await axios.get('product/getallproducts').then((res)=>{
        data.rows=(res.data.data.products);
        data.rows.forEach((item, i) => {
            item.id = i + 1;
          })
        setData({...data});
      }).catch((err)=>{console.log(err)})
}
useEffect((()=>{load()}),[status])

const update={
    onClick:(e,row,rowIndex)=>{
       setRow(row)
        console.log(row);
        setstatus(false);

    }
}

  return (
<>
{status?
(
       <Container fluid>
        <Row>
           <Col><h1>Products</h1></Col>
        </Row>
        <Row>
            <Col>
         <BootstrapTable rowStyle={{color:"black"}} striped hover keyField='id' data={data.rows} columns={data.columns} filter={filterFactory() }   pagination={ paginationFactory() } rowEvents={update}/>
         </Col>
         </Row>
         </Container>
  )
 :(<Update row={row} setstatus={setstatus}/>)        
}
</>
    )
}
