import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
 const reviews = [
  {
   id: 1,
   name: "John Doe",
   review:
    "Amazing experience! The food was delicious and the ambiance was perfect.",
   rating: 5,
   image: "./reviews/avatar-01.png",
  },
  {
   id: 2,
   name: "Sarah Smith",
   review: "Great service and tasty dishes. Will definitely come back!",
   rating: 4,
   image: "./reviews/avatar-02.png",
  },
  {
   id: 3,
   name: "Michael Brown",
   review: "The food was good, but the service could be improved.",
   rating: 3,
   image: "./reviews/avatar-03.png",
  },
  {
   id: 4,
   name: "Lucy John",
   review: "The food was good, but the service could be improved.",
   rating: 4,
   image: "./reviews/avatar-04.png",
  },
  {
   id: 5,
   name: "Sean Jhonson",
   review: "The food was good, but the service could be improved.",
   rating: 3,
   image: "./reviews/avatar-05.png",
  },
  {
   id: 6,
   name: "Brain Stev",
   review: "The food was good, but the service could be improved.",
   rating: 5,
   image: "./reviews/avatar-06.png",
  },
 ];
 const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
   <span key={index} className={index < rating ? "text-warning" : "text-muted"}>
    ★
   </span>
  ));
 };
 return (
  <section className="home-section bg-black">
   {/* Hero */}
   <div className="hero-section text-center text-light">
    <Image
     src="./home-sec.webp"
     alt="Delicious food"
     className="hero-image border border-0 border-top border-warning"
     fluid
    />
    <div className="overlay text-start">
     <h1 className="fs-1 fw-bold">FRESH FOOD IN ONE PLACE</h1>
     <p>
      Experience the finest flavors and unforgettable dining moments at Savor.
      Our chefs carefully craft each dish using the freshest ingredients.
     </p>
     <Button variant="warning">
      <Link
       to="/menu"
       className="mt-3 fw-semibold text-black text-decoration-none"
      >
       Explore Our Menu
      </Link>
     </Button>
    </div>
   </div>
   {/* Reviews */}
   <Container className="py-5">
    <h2 className="text-center text-white fs-1 fw-bold mb-5">
     Customer Reviews
    </h2>
    <Row>
     {reviews.map((review) => (
      <Col key={review.id} md={4} className="mb-4">
       <Card className="review-section text-center bg-dark bg-opacity-50">
        <Card.Img
         src={review.image}
         variant="top"
         className="rounded-circle mx-auto mt-3"
         style={{ width: "80px", height: "80px" }}
        />
        <Card.Body>
         <Card.Title className="text-white">{review.name}</Card.Title>
         <div className="review-stars mb-2">{renderStars(review.rating)}</div>
         <Card.Text className="text-white-50">{review.review}</Card.Text>
        </Card.Body>
       </Card>
      </Col>
     ))}
    </Row>
   </Container>
   {/* Contact */}
   <Container className="contact-preview bg-dark bg-opacity-50 text-center py-5">
    <h2 className="fs-2 fw-bold text-white mb-2">Get in Touch</h2>
    <p className="text-white-50 fs-5 mb-4">
     Have questions or special requests? We’re here to help! Reach out to us,
     and let’s make your dining experience exceptional.
    </p>
    <Link to="/contact" className="mt-3 text-decoration-none">
     <Button variant="outline-warning" className="fs-5 fw-semibold">
      Contact Us
     </Button>
    </Link>
   </Container>
  </section>
 );
};

export default Home;
