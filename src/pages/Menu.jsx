import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";
import { useState } from "react";

const Menu = () => {
 const [show, setShow] = useState(false);
 const menuItems = useSelector((state) => state.menu.items);
 const dispatch = useDispatch();
 const handleAddToCart = () => {
  setTimeout(() => {
   setShow(true);
   setTimeout(() => setShow(false), 3000);
  }, 0);
 };
 return (
  <section className="bg-black">
   <h2 className="text-center fs-1 text-white fw-bold">Our Menu</h2>
   <div className="py-5">
    <Container className="py-5">
     <Row>
      {menuItems.map((item) => (
       <Col key={item.id} md={4} className="mb-4">
        <Card className="menu-section bg-dark bg-opacity-50 border border-warning">
         <Card.Img variant="top" src={item.image} />
         <Card.Body className="text-white">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           <strong>${item.price}</strong>
          </Card.Text>
          <Button
           onClick={handleAddToCart}
           variant="warning"
           className="text-black fw-semibold"
          >
           Add to Cart
          </Button>
         </Card.Body>
        </Card>
       </Col>
      ))}
     </Row>
     <div
      style={{
       position: "fixed",
       top: "30px",
       left: "30px",
       zIndex: 1050,
      }}
     >
      <Toast
       className="bg-success py-2"
       onClose={() => setShow(false)}
       show={show}
       delay={3000}
       autohide
      >
       <Toast.Body className="fw-bold fs-5 text-center">
        Added to the cart successfully!
       </Toast.Body>
      </Toast>
     </div>
    </Container>
   </div>
  </section>
 );
};

export default Menu;
