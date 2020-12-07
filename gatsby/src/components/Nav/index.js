import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./Nav.scss";

// Scrolling to links is done by '/#id' or '/.class'

const Nav = ({ logo }) => {
  return (
    <nav id="Nav">
      <div id="logo-wrapper">
        <img src={logo} alt="The Topo logo" />
      </div>
      <ul>
        <li>
          <AnchorLink to="/#Menu" title="Menu">
            <span>Menu</span>
          </AnchorLink>
        </li>

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
      </ul>
    </nav>
  );
};

export default Nav;
