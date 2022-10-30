import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import Button from "../../components/button/button.component";

import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckoutNavigation = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={handleCheckoutNavigation}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
