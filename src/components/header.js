import React from "react";
import { Link } from "gatsby";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-area">
          <Link to="/" className="logo">
            <span className="size-sm mb-0 font-weight-bold pl-3 text-dark text-left">
              EN
              <span className="base-color">
                DRU
              </span>
            </span>
          </Link>
        </div>
        <div className="header-info-area">
          <a href="#" className="overlay-menu-toggler lni-menu size-md"></a>
        </div>
      </header>
      <Menu></Menu>
    </>
  )
}

export default Header