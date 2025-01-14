import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
 return (
  <div className="not-found bg-black d-flex flex-column align-items-center justify-content-center text-center">
   <Container className=" bg-black ">
    <h1 className="display-1 fw-bold text-warning">404</h1>
    <h2 className="text-white fw-semibold mb-3">Page Not Found</h2>
    <p className="text-white-50 mb-4">
     Oops! The page you’re looking for doesn’t exist. It might have been moved
     or deleted.
    </p>
    <Button as={Link} to="/" variant="warning">
     Go Back Home
    </Button>
   </Container>
  </div>
 );
};

export default NotFound;
