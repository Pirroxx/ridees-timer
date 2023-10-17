import React from "react";
import "./Socials.css";
import insta from "../assets/insta.svg";
import tiktok from "../assets/tiktok.svg";
import linkedin from "../assets/linkedin.svg";
import Image from "next/image";

type Props = {};

const socials = (props: Props) => {
  return (
    <div className="socials-cont">
      <Image src={insta} alt="" />
      <Image src={tiktok} alt="" />
      <Image src={linkedin} alt="" />
      <button className="fllw-btn">Follow Us</button>
    </div>
  );
};

export default socials;
