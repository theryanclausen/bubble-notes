import React from "react";
import Bubble from "./Bubble";
import { randomRange } from "../config/functions";


const Bubbles = () => {
  const mediumBubbles = () => {
    return {
      pos: randomRange(0, 99) + "%",
      size: randomRange(50, 200, true) + "px",
      wiggle: randomRange(2, 100, true) + "px",
      wiggleDur: randomRange(1500, 8000, true) + "ms",
      duration: randomRange(3500, 33333, true) + "ms",
      delayDist: -1* randomRange(200, 750, true) + 'px',
      key: randomRange(1,999999999)
    };
  };
  const tinyBubbles = () => {
    return {
      pos: randomRange(0, 99) + "%",
      size: randomRange(1, 20, true) + "px",
      wiggle: randomRange(2, 100, true) + "px",
      wiggleDur: randomRange(1500, 8000, true) + "ms",
      duration: randomRange(3500, 33333, true) + "ms",
      delayDist: -1* randomRange(100, 750, true) + 'px',
      key: randomRange(1,999999999)
    };
  };
  return (
    <React.Fragment>
      {Array(3)
        .fill(null)
        .map(x => (
          <Bubble {...mediumBubbles()} />
        ))}
      {Array(33)
        .fill(null)
        .map(x => (
          <Bubble {...tinyBubbles()} />
        ))}
    </React.Fragment>
  );
};
export default Bubbles;
