import React from "react";

import { graphql } from "gatsby";

import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

const Topo = ({
  data: {
    banner,
    combos,
    drinks,
    sandwiches,
    sides,
    team,
    textContent,
    contactInfo,
  },
}) => {
  return (
    <>
      <Hero banner={banner} />
      <Menu menu={{ combos, drinks, sandwiches, sides }} />
      <AboutUs team={team} />
      <Contact contactInfo={contactInfo} />
    </>
  );
};

export const query = graphql`
  query allQuery {
    banner: allSanityBanner {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 6000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    sandwiches: allSanitySandwich {
      nodes {
        name
        description
        price
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    sides: allSanitySideDish {
      nodes {
        name
        description
        price
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    combos: allSanityCombo {
      nodes {
        name
        description
        price
      }
    }
    drinks: allSanityDrink {
      nodes {
        name
        price
      }
    }
    team: allSanityTeam {
      nodes {
        name
        description
        image {
          asset {
            fluid(maxWidth: 6000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    textContent: allSanityCopywriting {
      nodes {
        name
        content
      }
    }
  }
`;

export default Topo;
