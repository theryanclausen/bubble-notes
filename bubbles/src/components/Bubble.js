import React from "react";
import styled from "styled-components";

const Abubble = styled.div`
  @keyframes animateBubble {
    0% {
      bottom: ${props => props.heading ? '-333px':'-150px'};
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

  height: ${props => (props.size ? props.size : "auto")};
  width: ${props => (props.size ? props.size : "auto")};
  position: absolute;
  animation: animateBubble ${props => props.duration} linear infinite,
    sideWays ${props => props.wiggleDur} ease-in-out infinite alternate;
  left: ${props => props.pos};
  div {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height:333px;
    width: 333px;
    padding: 50px;
    h2{
        margin-bottom: 25px;
        font-size:26px;
    }
    p{
        text-align: center;
        font-size:18px;
    }
  }
`;

const Bubble = props => (
  <Abubble
    pos={props.pos}
    size={props.size}
    wiggle={props.wiggle}
    wiggleDur={props.wiggleDur}
    duration={props.duration}
    heading={props.heading}
  >
    <div>
        <h2>{props.heading}</h2>
      <p>{props.children}</p>
    </div>
  </Abubble>
);

export default Bubble;
