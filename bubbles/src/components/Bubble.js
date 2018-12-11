import React from "react";
import styled from "styled-components";


const Abubble = styled.div`
  @keyframes animateBubble {
    0% {
      bottom: -150px;
    }
    100% {
      bottom: 1200px;
    }
  }
  @keyframes sideWays {
    0% {
      margin-left: -20px;
    }
    100% {
      margin-left: ${props => props.wiggle};
    }
  }
  border-radius: 50%;
  box-shadow: 0 20px 30px #02060780, inset 0px 10px 30px 5px #f3fbfefc;
  height: ${props => props.size};
  width: ${props => props.size};
  position: absolute;
  animation: animateBubble ${props => props.duration} linear infinite,
    sideWays ${props => props.wiggleDur} ease-in-out infinite alternate;
left: ${props => props.pos};
`;

const Bubble = props => <Abubble pos={props.pos} size={props.size} wiggle={props.wiggle} wiggleDur={props.wiggleDur} duration={props.duration}/>;

export default Bubble;
