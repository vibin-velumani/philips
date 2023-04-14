import React,{useState} from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { bounce } from "react-animations";
import "../resources/css/Products.css"; // import external CSS file

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
      <Card className="product-card"> {/* add className */}
        <Card.Img
          variant="top"
          src={imageUrl}
          height={200}
          width={200}
          onClick={handleClick}
        />
      
      </Card>
    </Bounce>
  );
};

export default Product;
