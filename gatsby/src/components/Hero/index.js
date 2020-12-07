import React from "react";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Logo from "../../assets/images/Logo.png";

import "./Hero.scss";

const Hero = ({ banner }) => {
  const bannerImg = banner.nodes[0].image.asset.fluid;
  console.log(banner);
  return (
    <section id="Hero">
      <Img fluid={bannerImg} alt={banner.name} />
      <div id="Hero-content">
        <img id="logo" src={Logo} />
        <h1 id="header">Montreal's Radical Flatbread Restaurant</h1>

        <div className="cta">
          <AnchorLink to="/#Menu" title="Menu">
            <button>menu</button>
          </AnchorLink>
          <AnchorLink to="/#Contact" title="Menu">
            <button>contact</button>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
