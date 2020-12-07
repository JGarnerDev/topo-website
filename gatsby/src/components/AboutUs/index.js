import React from "react";
import Img from "gatsby-image";

import "./AboutUs.scss";

const AboutUs = ({ team }) => {
  const imgFluid = team.nodes[0].image.asset.fluid;
  const description = team.nodes[0].description;
  const name = team.nodes[0].name;
  return (
    <section id="AboutUs">
      <Img fluid={imgFluid} />
      <div className="description">
        <h2 className="section-header"> {name} </h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default AboutUs;
