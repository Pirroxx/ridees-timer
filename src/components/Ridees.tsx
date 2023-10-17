import React from "react";
import "./Riddees.css";
import Image from "next/image";
import Ridee from "../assets/Ridees.svg";
type Props = {};

const Ridees = (props: Props) => {
  return (
    <div className="ridees-cont">
      <Image className="img-rid" src={Ridee} alt="" />
      <h1 className="header-cno">BRINGING EVERY TRIP CLOSER WITH A TAP</h1>
    </div>
  );
};

export default Ridees;
