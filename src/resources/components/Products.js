import React from 'react'
import Item  from './Item'
import { Row } from 'react-bootstrap';
export const Products = () => {
  return (
    <>
    
    <Row xs={2} md={3} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Item/>
      ))}
    </Row>
    
    </>
  )
}
