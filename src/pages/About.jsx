import { Button, Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
 return (
  <section className="about-section bg-black">
   <h2 className="text-center text-white fs-1 fw-bold pb-4">About Us</h2>
   <div className="py-5">
    <Container>
     <Row className="align-items-center text-white pb-5">
      <Col md={6}>
       <Image
        src="./about-sec.jpg"
        alt="Delicious food"
        fluid
        className="rounded"
       />
      </Col>
      <Col md={6}>
       <p className="fs-5">
        At Savor, we believe in creating memorable dining experiences. Our
        commitment to quality, taste, and customer satisfaction sets us apart in
        the culinary world.
       </p>
       <ul className="about-features list-unstyled mt-4 fs-5">
        <li>🍽️ High-quality, fresh ingredients</li>
        <li>🌟 Exceptional service</li>
        <li>🍷 A unique dining experience</li>
        <li>🌍 Sustainable sourcing practices</li>
       </ul>
       <Button variant="warning" className="fs-5 fw-semibold">
        Order Now!
       </Button>
      </Col>
     </Row>
    </Container>
   </div>
  </section>
 );
};

export default About;
