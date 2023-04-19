import React from 'react'
import SpecialProduct from '../resources/Single_page/components/SpecialProduct';
import Container from '../resources/Single_page/components/Container';
export default function Offers() {
  return (
<Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>  )
}
