import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkld from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>owolabitoba31@gmail.com</span>
        <div className="f-icons">

          <a href="https://www.github.com/Thobatech31" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>

          <a href="https://www.linkedin.com/in/toba-owolabi-466316205" target="_blank">
            <Linkld color="white" size={"3rem"} />

          </a>

          <a href="https://www.linkedin.com/in/toba-owolabi-466316205" target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
