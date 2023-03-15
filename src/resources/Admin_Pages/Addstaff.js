import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory,{textFilter}  from 'react-bootstrap-table2-filter'
import axios from '../../Api/axios'
import paginationFactory from 'react-bootstrap-table2-paginator';  
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Update from '../Admin_components/Update';
import Newadmin from '../Admin_components/Newadmin';
export default function Addstaff() {


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
        dataField: 'email',
        text:'Email',
    }, 
    {
        dataField: 'ph',
        text:'Phone',
        sort:true

    },
    {
        dataField: 'status',
        text:'Status',
    }
  ],
rows: []


})
const load=async()=>{
      await axios.get('auth/alladmin').then((res)=>{
        data.rows=(res.data.details);
        data.rows.forEach((item, i) => {
            item.id = i + 1;
          })
        setData({...data});
      }).catch((err)=>{console.log(err)})
}
useEffect((()=>{load()}),[status])



  return (
<>
{status?
(
       <Container fluid>
        <Row>
           <Col><h1>Admin Control <Button style={{float:"right",fontSize:"large"}} onClick={()=>{setstatus(false)}}>Modify</Button></h1></Col>
        </Row>
        <Row>
            <Col>
         <BootstrapTable rowStyle={{color:"black"}} striped hover keyField='id' data={data.rows} columns={data.columns} filter={filterFactory() }   pagination={ paginationFactory() } />
         </Col>
         </Row>
         </Container>
  )
 :(<Newadmin setstatus={setstatus}/>)        
}
</>
    )
}
