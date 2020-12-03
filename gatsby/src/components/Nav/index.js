import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./Nav.scss";

// Scrolling to links is done by '/#id' or '/.class'

const Nav = () => {
  return (
    <nav id="Nav">
      <ul>
        <div id="left">
          <li>
            <AnchorLink to="/#Hero" title="Home">
              <span>Home</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#Menu" title="Menu">
              <span>Menu</span>
            </AnchorLink>
          </li>
        </div>

        <div id="logo"></div>

        <div id="right">
          <li>
            <AnchorLink to="/#AboutUs" title="Our team">
              <span>Our team</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#Contact" title="Contact">
              <span>Contact</span>
            </AnchorLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
