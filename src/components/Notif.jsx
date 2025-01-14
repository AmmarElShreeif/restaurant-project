import { useState } from "react";
import { Toast } from "react-bootstrap";

const Notif = () => {
 const [show, setShow] = useState(false);
 const handleAddToCart = () => {
  setTimeout(() => {
   setShow(true);
   setTimeout(() => setShow(false), 3000);
  }, 3000);
 };
 return (
  <div>
   <div
    style={{
     position: "fixed",
     top: "20px",
     right: "20px",
     zIndex: 1050,
    }}
   >
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
     <Toast.Header>
      <strong className="me-auto">Alert</strong>
     </Toast.Header>
     <Toast.Body>Added to the cart successfully!</Toast.Body>
    </Toast>
   </div>
  </div>
 );
};

export default Notif;
