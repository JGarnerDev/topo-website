import React from "react";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./Hero.scss";

const Hero = ({ banner }) => {
  const bannerImg = banner.nodes[0].image.asset.fluid;

  return (
    <section id="Hero">
      <Img fluid={bannerImg} alt={banner.name} />
      <div className="cta">
        <AnchorLink to="/#Menu" title="Menu">
          <button>menu</button>
        </AnchorLink>
        <AnchorLink to="/#Contact" title="Menu">
          <button>contact</button>
        </AnchorLink>
      </div>
    </section>
  );
};

export default Hero;
