import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../index.css";

const Contact = () => {
 return (
  <section className="contact-section bg-black">
   <Container>
    <Row className="mb-4 text-center">
     <Col>
      <h2 className="fs-1 fw-bold text-white">Contact Us</h2>
      <p className="text-white-50">
       We'd love to hear from you! Reach out with any questions or feedback.
      </p>
     </Col>
    </Row>
    <Row className="pb-5">
     <Col md={6}>
      <Form>
       <Form.Group controlId="formName" className="mb-3 text-white">
        <Form.Label>Name</Form.Label>
        <Form.Control
         type="text"
         className="form-control bg-dark border-0"
         placeholder="Enter your name"
         required
        />
       </Form.Group>
       <Form.Group controlId="formEmail" className="mb-3 text-white">
        <Form.Label>Email</Form.Label>
        <Form.Control
         type="email"
         className="form-control bg-dark border-0"
         placeholder="Enter your email"
         required
        />
       </Form.Group>
       <Form.Group controlId="formMessage" className="mb-4 text-white">
        <Form.Label>Message</Form.Label>
        <Form.Control
         as="textarea"
         className="form-control bg-dark border-0"
         rows={4}
         placeholder="Your message"
         required
        />
       </Form.Group>
       <Button variant="warning" type="submit" className="fw-semibold mb-4">
        Send Message
       </Button>
      </Form>
     </Col>
     <Col md={6}>
      <div className="contact-info">
       <h5>Our Location</h5>
       <p>
        123 Flavor Street
        <br />
        Foodie City, FC 45678
       </p>
       <h5>Contact Details</h5>
       <p>Phone: (123) 456-7890</p>
       <p>Email: contact@savor.com</p>
       <h5>Working Hours</h5>
       <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
       <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
      </div>
     </Col>
    </Row>
   </Container>
  </section>
 );
};

export default Contact;
