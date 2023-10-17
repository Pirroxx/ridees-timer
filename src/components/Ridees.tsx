"use client";
import React, { useEffect, useState } from "react";
import "./Riddees.css";
import Image from "next/image";
import Ridee from "../assets/Ridees.svg";
type Props = {};

const Ridees = (props: Props) => {
  const [os, setOS] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;

    if (/Win/.test(platform)) {
      setOS("Windows");
    } else if (/Linux/.test(platform)) {
      setOS("Linux");
    } else {
      setOS("Unknown OS");
    }
  }, []);
  const isWindows = window.navigator.platform.indexOf("Win") > -1;
  const isMacOS = navigator.userAgent.includes("Macintosh");
  return (
    <div className="ridees-cont">
      <Image className="img-rid" src={Ridee} alt="" />
      <h1
        className={
          isWindows ? "new-windos" : isMacOS ? "mac-class-text" : "header-cno"
        }
        // className={
        //   os === "Linux" ? "header-cno" : os === "Windows" ? "new-windos" : ""
        // }
      >
        BRINGING EVERY TRIP CLOSER WITH A TAP
      </h1>
    </div>
  );
};

export default Ridees;
