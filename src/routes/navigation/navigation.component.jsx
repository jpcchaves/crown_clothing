// React
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
// SVG
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
// CSS
import "./navigation.styles.scss";
// context
import { UserContext } from "../../contexts/user.context";
// signout firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  // user context
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
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
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
