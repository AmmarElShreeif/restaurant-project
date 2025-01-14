import { Button, Container, Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../redux/Slices/cartSlice";

const Carts = () => {
 const handleClearCart = () => {
  dispatch(clearCart());
 };
 const cartItem = useSelector((state) => state.cart.items);
 const dispatch = useDispatch();
 const handleRemove = (id) => {
  dispatch(deleteFromCart(id));
 };
 const total = cartItem.reduce((acc, item) => {
  acc += item.price * item.quantity;
  return acc;
 }, 0);
 return (
  <section className="carts-section bg-black">
   <div className="text-center fs-1 text-white mb-5 fw-bold">My Carts</div>
   <div className="carts py-5">
    <Container>
     <h2 className="text-white fs-2 fw-semibold">Your Cart</h2>
     <div className="py-3 bg-black">
      {cartItem.length > 0 ? (
       <>
        <Table className="table" striped bordered hover variant="dark">
         <thead>
          <tr>
           <th className="image">Image</th>
           <th>Name</th>
           <th>Price</th>
           <th>Qountity</th>
           <th>Actions</th>
          </tr>
         </thead>
         {cartItem.map((item) => (
          <tbody key={item.id}>
           <tr>
            <td className="image">
             <Image
              src={item.image}
              style={{ width: "100px", height: "100px" }}
             />
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>
             <Button onClick={() => handleRemove(item.id)} variant="danger">
              Remove
             </Button>
            </td>
           </tr>
          </tbody>
         ))}
        </Table>
        <h4 className="text-white mb-3">Total: ${total.toFixed(2)}</h4>
        <Button
         onClick={() => dispatch(handleClearCart)}
         className="btn btn-warning fw-semibold text-black"
        >
         Clear Cart
        </Button>
       </>
      ) : (
       <p className="py-5 text-white-50 fs-2 fw-bold">Your cart is empty.</p>
      )}
     </div>
    </Container>
   </div>
  </section>
 );
};

export default Carts;
