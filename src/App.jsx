import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Carts from "./pages/Carts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
 return (
  <Router>
   <div className="main d-flex flex-column">
    <Header />
    <div className="flex-grow-1">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
    <Footer />
   </div>
  </Router>
 );
};

export default App;
