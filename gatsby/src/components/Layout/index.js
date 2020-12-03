import React from "react";

import Nav from "../Nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <div id="content">{children}</div>
    </main>
  );
}

export default Layout;
