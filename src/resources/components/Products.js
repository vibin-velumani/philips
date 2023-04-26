import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../Api/axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/products.css'; // Import the CSS file
import { ClimbingBoxLoader } from 'react-spinners';

export const Products = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState();
  const [fil, setFil] = useState();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const load = async () => {
    await axios
      .get('product/getallproducts')
      .then((res) => {
        setData(res.data.data.products);
        setStatus(true);
        setFil(res.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const searchFilter = () => {
    if (search.length === 0) {
      setFil(data);
    } else {
      const d = fil.filter((data, index) => {
        if (data.name.toLowerCase().includes(search.toLowerCase())) {
          return data;
        }
      });
      setFil(d);
    }
  };

  return (
    <>
      <Container className="products-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={12}>
            <Form className="search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="success"
                className="search-button"
                onClick={searchFilter}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {status ? (
          <>
            <Row xs={2} md={3} className="g-4">
              {fil
                .slice(currentPage * 12, currentPage * 12 + 12)
                .map((d, index) => {
                  return <Item key={index} data={d}></Item>;
                })}
            </Row>
            <br />
            <Row>
              <Col md={{ span: 6, offset: 3 }} xs={12}>
                {currentPage > 0 ? (
                  <Button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    variant="success"
                    className="me-2"
                  >
                    Prev Page
                  </Button>
                ) : (
                  <></>
                )}
                {currentPage * 12 + 12 < fil.length ? (
                  <Button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    variant="success"
                    className="ms-2"
                  >
                    Next Page
                  </Button>
                ) : (
                  <></>
                )}
              </Col>
          
        <Col md={4} xs={1} sm={1}>
        </Col>
</Row>
       </>
    
    )
:(<>

<div className="d-flex justify-content-center align-items-center vh-100">
      <ClimbingBoxLoader color="#36d7b7" />
    </div>
</>)   
   }
   </Container>
    </>
  )
}