import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Chris Darnell</p>
    </footer>
  );
}

export default Footer;
