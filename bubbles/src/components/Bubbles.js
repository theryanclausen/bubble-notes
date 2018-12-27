import React from "reactn";
import { bubbles, tinyBubbles } from "../config/config";
import {Abubble} from '../config/styled-containers'

const Bubbles = () => {

  return (
    <React.Fragment>
      {Array(8)
        .fill(null)
        .map(x => {
          const bubbleStats = bubbles();
          return <Abubble {...bubbleStats} />;
        })}
      {Array(33)
        .fill(null)
        .map(x => {
          const bubbleStats = tinyBubbles();
          return <Abubble {...bubbleStats} />;
        })}
    </React.Fragment>
  );
};
export default Bubbles;
