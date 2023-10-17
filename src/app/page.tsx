"use client";
import React from "react";
import CountdownCloc from "@/components/CountdownTimer";
import "./globals.css";
import Ridee from "@/components/Ridees";
import Socials from "@/components/socials";

const CountdownClock: React.FC = () => {
  return (
    <>
      {" "}
      <Ridee />
      <CountdownCloc />
      <Socials />
    </>
  );
};

export default CountdownClock;
