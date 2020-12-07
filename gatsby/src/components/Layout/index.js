import React from "react";

import Nav from "../Nav";

import Logo from "../../assets/images/Logo.png";

function Layout({ children }) {
  return (
    <main>
      <Nav logo={Logo} />
      <div id="content">{children}</div>
    </main>
  );
}

export default Layout;
