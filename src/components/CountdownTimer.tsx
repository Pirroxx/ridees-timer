import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import car from "../assets/Asset 1.svg";
import phone from "../assets/phonesc.svg";
import Image from "next/image";
import "./countdown.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountdownClock: React.FC = () => {
  const targetTime = new Date().getTime() + 48 * 7200 * 2000 + 10000;
  return (
    <div className="down-cont">
      <div className="fliper">
        <FlipClockCountdown
          to={targetTime}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          className="flip"
        />
      </div>
      <div className="images-cont">
        <Image loading="lazy" className="car-img" src={car} alt="" />
        <Image className="phone-img" src={phone} alt="" />
      </div>
    </div>
  );
};

export default CountdownClock;
