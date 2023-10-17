"use client";
import React, { useEffect, useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import car from "../assets/Asset 1.svg";
import phone from "../assets/phonesc.svg";
import Image from "next/image";
import "./countdown.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountdownClock: React.FC = () => {
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
  const targetTime = new Date().getTime() + 48 * 7200 * 2000 + 10000;
  const isMacOS = navigator.userAgent.includes("Macintosh");
  return (
    <div
      className={
        isWindows ? "down-cont" : isMacOS ? "mac-class-container" : "down-cont"
      }
    >
      <div className="fliper">
        <FlipClockCountdown
          to={targetTime}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          className="flip"
        />
      </div>
      <div
        className={
          isWindows ? "new-classname" : isMacOS ? "mac-class" : "images-cont"
        }
        // className={
        //   os === "Linux"
        //     ? "images-cont"
        //     : os === "Windows"
        //     ? "new-classname"
        //     : ""
        // }
      >
        <Image loading="lazy" className="car-img" src={car} alt="" />
        <Image className="phone-img" src={phone} alt="" />
      </div>
    </div>
  );
};

export default CountdownClock;
