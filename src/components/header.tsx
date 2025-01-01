import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import Hambargar from "../assets/images/icon-menu.svg";
import CloseMenu from "../assets/images/icon-menu-close.svg";

import { useState } from "react";

const Header = () => {
  const [mobileMenuIcon, setMobileMenuIcon] = useState(false);

  const styles = {
    on: {
      backgroundImage: `url(${CloseMenu})`,
      top: "5px",
    },
    off: {
      backgroundImage: `url(${Hambargar})`,
    },
  };

  const mobileMenuLayout = () => {
    setMobileMenuIcon(!mobileMenuIcon);
    mobileMenuIcon
      ? (document.getElementsByTagName("body")[0].style.overflow = "auto")
      : (document.getElementsByTagName("body")[0].style.overflow = "hidden");
  };

  const bgClick = (e: any) => {
    e.target.className.includes("mobile-trigger") ? mobileMenuLayout() : null;
  };

  return (
    <>
      <div onClick={bgClick} className={!mobileMenuIcon ? "layout" : "layout mobile-trigger"}>
        <div className="header-wrapper">
          <div className="logo">
            <a href="/" aria-label="site logo">
              <img src={Logo} alt="site logo" width={65} height={40} />
            </a>
          </div>

          <div
            onClick={mobileMenuLayout}
            className="mobile-toggle"
            style={mobileMenuIcon ? styles.on : styles.off}
          ></div>

          <nav className={!mobileMenuIcon ? "nav-mobile" : "nav-mobile mobile-menu"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>

          <nav className="nav-desktop">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
