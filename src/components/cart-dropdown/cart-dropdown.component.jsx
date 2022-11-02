import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import Button from "../../components/button/button.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckoutNavigation = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleCheckoutNavigation}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
