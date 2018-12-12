import React from "react";
import styled from "styled-components";

const Abubble = styled.div`
  @keyframes animateBubble {
    0% {
      bottom: ${props => props.delayDist || "350px"};
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
      margin-left: ${props => props.wiggle || "100px"};
    }
  }
  z-index: ${props => (props.z ? props.z : "0")}
  animation-delay: ${props => (props.delay ? props.delay : "1ms")};
  border-radius: 50%;
  box-shadow: 0 20px 30px #02060780, inset 0px 10px 30px 5px #f3fbfefc;
  background: #95def280;
  height: ${props => (props.size ? props.size : "auto")};
  width: ${props => (props.size ? props.size : "auto")};
  position: absolute;
  animation: animateBubble ${props => props.duration || "22s"} linear infinite,
    sideWays ${props => props.wiggleDur || "4s"} ease-in-out infinite alternate;
  left: ${props => props.pos || "50%"};
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 333px;
    width: 333px;
    padding: 50px;
    border-radius:50%;
    h2 {
      text-align: center;
      margin-bottom: 25px;
      font-size: 26px;
    }
    p {
      text-align: center;
      font-size: 18px;
    }
  }
`;

const Bubble = props => {
  return (
    <Abubble
      pos={props.pos}
      size={props.size}
      wiggle={props.wiggle}
      wiggleDur={props.wiggleDur}
      duration={props.duration}
      delayDist={props.delayDist}
      z={props.z}
    >
      <div
        id={props.id}
        onClick={e => props.title ? props.deleteNote(e.target.id,props.title): ''}
        onMouseEnter={e =>
          props.deleteStatus && props.title ?
            e.target.style.backgroundColor = '#ff000080'
            : ''  
        }
        onMouseLeave={e => e.target.style.backgroundColor = 'unset'}
      >
        <h2 >{props.title}</h2>
        <p >{props.textBody}</p>
      </div>
    </Abubble>
  );
};
export default Bubble;
