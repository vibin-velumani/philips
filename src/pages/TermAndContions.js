import React from "react";
import "../pages/Home";
import Footer from "../resources/components/Footer";
import Header from "../resources/components/Header";
import BreadCrumb from "../resources/Single_page/components/BreadCrumb";
import Meta from "../resources/Single_page/components/Meta";
import Container from "../resources/Single_page/components/Container";


const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className=""></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
