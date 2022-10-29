// React
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
// component
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// SVG
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
// CSS
import "./navigation.styles.scss";
// context
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
// signout firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  // user context
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
