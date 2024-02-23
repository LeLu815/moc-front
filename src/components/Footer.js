import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>© 2024 MoC. All Rights Reserved</div>
      {/* <a href="/about" className={classes.about}>About Us</a> */}
    </footer>
  );
};

export default Footer;
