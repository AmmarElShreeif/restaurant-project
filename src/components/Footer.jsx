import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <footer className="bg-black text-light py-4">
   <Container>
    <Row className="gy-4">
     <Col md={3}>
      <Link to="/" className="fs-1 fw-bold text-white text-decoration-none">
       Bist<span className="text-warning">ro</span>
      </Link>
      <p className="text-white-50">
       Experience the finest flavors at Savor. From fresh ingredients to unique
       dishes, we bring you an unforgettable dining experience.
      </p>
     </Col>
     <Col className="pt-3" md={3}>
      <h5>Quick Links</h5>
      <ul className="list-unstyled">
       <li className="mb-1">
        <Link to="/" className="text-white-50 text-decoration-none">
         Home
        </Link>
       </li>
       <li className="mb-1">
        <Link to="/menu" className="text-white-50 text-decoration-none">
         Menu
        </Link>
       </li>
       <li className="mb-1">
        <Link to="/about" className="text-white-50 text-decoration-none">
         About
        </Link>
       </li>
       <li>
        <Link to="/contact" className="text-white-50 text-decoration-none">
         Contact Us
        </Link>
       </li>
      </ul>
     </Col>
     <Col className="pt-3" md={3}>
      <h5>Follow Us</h5>
      <ul className="list-unstyled">
       <li className="mb-1">
        <a
         href="https://facebook.com"
         className="text-white-50 text-decoration-none"
         target="_blank"
         rel="noopener noreferrer"
        >
         Facebook
        </a>
       </li>
       <li className="mb-1">
        <a
         href="https://instagram.com"
         className="text-white-50 text-decoration-none"
         target="_blank"
         rel="noopener noreferrer"
        >
         Instagram
        </a>
       </li>
       <li>
        <a
         href="https://twitter.com"
         className="text-white-50 text-decoration-none"
         target="_blank"
         rel="noopener noreferrer"
        >
         Twitter
        </a>
       </li>
      </ul>
     </Col>
     <Col className="pt-3" md={3}>
      <h5>Contact Us</h5>
      <p className="text-white-50 ">
       123 Flavor Street
       <br />
       Foodie City, FC 45678
       <br />
       Phone: (123) 456-7890
       <br />
       Email: contact@savor.com
      </p>
     </Col>
    </Row>
    <hr className="bg-light" />
    <div className="text-center">
     <p className="mb-0 text-white-50">
      &copy; {new Date().getFullYear()} Ammar ElShreif. All Rights Reserved.
     </p>
    </div>
   </Container>
  </footer>
 );
};

export default Footer;
