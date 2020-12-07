import React from "react";

import Layout from "./src/components/Layout";

import "normalize.css";
import "./src/styles/main.scss";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
