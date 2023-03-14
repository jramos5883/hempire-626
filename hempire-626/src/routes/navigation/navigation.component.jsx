import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as HempLogo } from "../../assets/HempireLogo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link" to="/about">
          ABOUT US
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT US
        </Link>
        <Link className="nav-link" to="/faq">
          FAQ's
        </Link>
        <Link className="nav-link" to="/policies">
          POLICIES INFO
        </Link>
        <Link className='logo-container' to="/">
          <HempLogo className="logo" />
        </Link>
        <Link className="nav-link" to="/location">
          LOCATION
        </Link>
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          SIGN IN
        </Link>
        <Link className="nav-link" to="/shop">
          CART
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
