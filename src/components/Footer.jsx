import React from 'react';

function Footer() {
  return (
    <footer  style={{ textAlign: "center" }}>
      <hr />
      <p>&copy; {new Date().getFullYear()} GO. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
