import { Button, Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Links = [
 { name: "Home", href: "/" },
 { name: "Menu", href: "/menu" },
 { name: "About", href: "/about" },
 { name: "Contact", href: "/contact" },
];
const Header = () => {
 return (
  <Navbar expand="lg" variant="dark" className="p-4 bg-black ">
   <Container>
    <Navbar.Brand as={Link} to="/" className="fs-1 fw-bold text-white">
     Bist<span className="text-warning">ro</span>
    </Navbar.Brand>
    <NavItem className="d-flex align-items-center">
     <Link
      to="/carts"
      className="shopping-carts text-white text-decoration-none"
     >
      <span className="icon-shopping-cart fs-1"></span>
     </Link>
     <Navbar.Toggle
      className="toggle text-warning"
      aria-controls="navbarScroll"
     />
    </NavItem>
    <Navbar.Collapse id="navbar-nav" className="justify-content-between">
     <div />
     <Nav>
      {Links.map((item) => (
       <NavLink
        to={item.href}
        key={item.name}
        className={({ isActive }) => {
         return (
          "fw-semibold fs-5 m-2 text-white text-decoration-none" +
          (isActive
           ? "border border-5 border-warning border-bottom text-decoration-none"
           : "")
         );
        }}
       >
        {item.name}
       </NavLink>
      ))}
     </Nav>
     <NavItem className="d-flex align-items-center">
      <Link
       to="/carts"
       className="shopping-cart text-decoration-none text-white"
      >
       <span className="icon-shopping-cart fs-1"></span>
      </Link>
      <Button
       variant="warning"
       className="fs-5 text-black fw-semibold btn btn-warning expand-lg"
      >
       Order Now
      </Button>
     </NavItem>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
