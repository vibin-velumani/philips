import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory,{textFilter}  from 'react-bootstrap-table2-filter'
import axios from '../../Api/axios'
import paginationFactory from 'react-bootstrap-table2-paginator';  
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import UpdateOrder from '../Admin_components/UpdateOrder';



export default function AdminOrders() {
  
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
      dataField: '_id',
      text:'Order ID ',
      filter:textFilter()
    },
   
    {
        dataField: 'cartValue',
        text:'Amount',
        sort:true

    }, 
    {
        dataField: 'paymenttype',
        text:'Mode',
        sort:true

    },
    {
        dataField: 'paymentstatus',
        text:'Payment',
    }
    ,
    {
        dataField: 'orderstatus',
        text:'Order',
        sort:true
    }
  ],
rows: []


})
const load=async()=>{
      await axios.get('order/allorders').then((res)=>{
        console.log(res);
        data.rows=(res.data.data);
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
           <Col><h1>Orders</h1></Col>
        </Row>
        <Row>
            <Col>
         <BootstrapTable rowStyle={{color:"black"}} striped hover keyField='id' data={data.rows} columns={data.columns} filter={filterFactory() }   pagination={ paginationFactory() } rowEvents={update}/>
         </Col>
         </Row>
         </Container>
  )
 :(<UpdateOrder row={row} setstatus={setstatus}/>)        
}
</>
    )


}
