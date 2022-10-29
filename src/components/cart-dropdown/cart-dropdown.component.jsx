import Button from "../../components/button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button></Button>
    </div>
  );
};

export default CartDropdown;
