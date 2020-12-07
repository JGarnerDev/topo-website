import React from "react";
import Img from "gatsby-image";

import "./Menu.scss";

const Menu = ({ menu }) => {
  const { combos, drinks, sandwiches, sides } = menu;

  const renderSandwiches = () => (
    <div className="menu-section">
      <h2 className="section-header"> Our sandwiches </h2>
      <h2 className="section-description">Regular or Gluten-Free</h2>
      <div className="section-items">
        {sandwiches.nodes.map((sandwich) => {
          let { name, description, price, image } = sandwich;
          price /= 100;
          return (
            <div className="productCard">
              <Img fluid={image.asset.fluid} alt={name} />
              <div className="details">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderSides = () => (
    <div className="menu-section">
      <h2 className="section-header"> Sides </h2>
      <div className="section-items">
        {sides.nodes.map((side) => {
          let { name, description, price, image } = side;
          price /= 100;
          return (
            <div className="productCard">
              <Img fluid={image.asset.fluid} alt={name} />
              <div className="details">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderDrinks = () => (
    <div className="menu-section drinks">
      <h2 className="section-header"> Drinks </h2>
      <div className="section-items">
        {drinks.nodes.map((drink) => {
          let { name, price } = drink;
          price /= 100;
          return (
            <div className="drink">
              <div className="details">
                <h3>{name}</h3>

                <h4>${price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  const renderCombos = () => (
    <div className="menu-section">
      <h2 className="section-header"> Combos </h2>
      <div className="section-items">
        {combos.nodes.map((combo) => {
          let { name, description, price } = combo;
          price /= 100;
          return (
            <div className="combo">
              <div className="details">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="Menu">
      {renderSandwiches()}
      {renderSides()}
      {renderDrinks()}
      {renderCombos()}
    </section>
  );
};

export default Menu;
