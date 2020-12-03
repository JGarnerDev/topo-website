import React from "react";

import Layout from "../components/Layout";

import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

import "../styles/main.scss";

const Topo = () => {
  return (
    <Layout>
      <Hero />
      <Menu />
      <AboutUs />
      <Contact />
    </Layout>
  );
};

export default Topo;
