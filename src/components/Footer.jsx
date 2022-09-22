import React from "react";
import Kurama from "../assets/kurama1.png";

const Footer = () => {
  return (
    <div className="hidden lg:flex fixed bottom-[0%] right-0 ">
      <img className="" style={{ width: "350px" }} src={Kurama} alt="kurama" />
    </div>
  );
};

export default Footer;
