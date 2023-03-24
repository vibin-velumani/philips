import React,{useState} from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 1s ${bounce};
`;

const Product = ({ title, imageUrl,description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Bounce>
       <Card style={{ width: "18rem", borderRadius: "20px" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ borderRadius: "20px 20px 20px 20px" }}
          onClick={handleClick}
        />
      
      </Card>
    </Bounce>
  );
};

export default Product;