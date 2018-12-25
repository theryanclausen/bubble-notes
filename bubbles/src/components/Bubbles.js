import React from "reactn";
import Bubble from "./Bubble";
import { bubbles, tinyBubbles } from "../config/config";

const Bubbles = () => {

  return (
    <React.Fragment>

      {Array(8)
        .fill(null)
        .map(x => {
          const bubbleStats = bubbles();
          return <Bubble key={bubbleStats.key} bubbleStats={bubbleStats} />;
        })}
      {Array(33)
        .fill(null)
        .map(x => {
          const bubbleStats = tinyBubbles();
          return <Bubble key={bubbleStats.key} bubbleStats={bubbleStats} />;
        })}
    </React.Fragment>
  );
};
export default Bubbles;
