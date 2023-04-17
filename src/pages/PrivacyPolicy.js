import React from "react";
import "../pages/Home";
import Footer from "../resources/components/Footer";
import Header from "../resources/components/Header";
import BreadCrumb from "../resources/Single_page/components/BreadCrumb";
import Meta from "../resources/Single_page/components/Meta";
import Container from "../resources/Single_page/components/Container";
import "../resources/css/PrivacyPolicy.css"; // import external css file

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Our Privacy Policy</h2>
              <p>
                We take your privacy seriously and are committed to protecting
                your personal information.
              </p>
              <p>
                When you use our website, we may collect certain information
                about you such as your name, email address, and IP address. This
                information is used to improve our website and provide you with
                a better user experience.
              </p>
              <p>
                We do not share your personal information with third parties
                unless required by law.
              </p>
              <h3>Cookies</h3>
              <p>
                We use cookies to track user activity on our website and improve
                our services. You can choose to disable cookies in your browser
                settings if you prefer not to share this information.
              </p>
              <h3>Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                websites.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
