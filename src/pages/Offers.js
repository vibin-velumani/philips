import React, { useEffect, useState } from 'react'
import SpecialProduct from '../resources/Single_page/components/SpecialProduct';
import Container from '../resources/Single_page/components/Container';
import axios from '../Api/axios';
export default function Offers() {
const [data,setdata]=useState([]);
const load=async()=>{
  await axios.get("/product/offers").then((res)=>{
    setdata(res.data.data);
  }).catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
load()
},[])


  return (
<Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            data.map((d,i)=>{
              const offerDate = new Date(d.offerdd);
              const now = new Date();
        
              const diff = offerDate.getTime() - now.getTime();
              if(diff>0)
                    return  <SpecialProduct key={i} data={d} />

            })
          }
        </div>
      </Container>  )
}
