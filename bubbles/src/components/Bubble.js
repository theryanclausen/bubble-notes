import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

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
  z-index: ${props => (props.z ? props.z : "0")};
  animation-delay: ${props => (props.delay ? props.delay : "1ms")};
  border-radius: 50%;
  box-shadow: 0 20px 30px #02060780, inset 0px 10px 30px 5px #f3fbfefc;
  background: ${props => (props.pendingEdit ? "#66ff6680" : "#95def280")};
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
    width: 333px;
    height: 333px;
    padding: 50px;
    border-radius: 50%;
    color: white;
    text-shadow: 2px 2px 11px #1a6670, -2px -2px 11px #1a6670;
    h2 {
      word-wrap: break-word;
      text-align: center;
      margin-bottom: 25px;
      font-size: 36px;
      width: 100%;
      transform: translateZ(2000px);
      font-family: "Hi Melody", cursive;
    }
    p {
      text-align: center;
      font-size: 25px;
      word-wrap: break-word;
      width: 100%;
      font-family: "Hi Melody", cursive;
    }
  }
`;

const Bubble = props => {
  const [destroyed, setDestroy] = useState(false);
  const tiltNode = useRef();

  useLayoutEffect(() => {
    const vanillaTiltOptions = {
      reverse: true,
      max: 43,
      speed: 200,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 1999,
      reset: true
    };
    VanillaTilt.init(tiltNode.current, vanillaTiltOptions);
    if (destroyed) {
      tiltNode.current.VanillaTilt.destroy();
      setDestroy(false);
      return;
    }
  }, []);

  const mouseEnterHandler = e => {
    let target =
      e.target.localName === "h2" || e.target.localName === "p"
        ? e.target.parentNode
        : e.target;
    if (props.bubbleControl) {
      if (props.bubbleControl.status === "delete" && props.title) {
        target.style.backgroundColor = "#ff000080";
      }
      if (
        props.bubbleControl.status === "edit" &&
        props.title &&
        !props.bubbleControl.id
      ) {
        target.style.backgroundColor = "#66ff6680";
      }
    }
  };

  const clickHandler = e => {
    let target =
      e.target.localName === "h2" || e.target.localName === "p"
        ? e.target.parentNode
        : e.target;
    if (props.title && props.bubbleControl.status === "delete") {
      setDestroy(true);
      target.style.display = "none";
      props.deleteNote(target.id);
    }
    if (props.title && props.bubbleControl.status === "edit") {
      props.dispatch({type:'edit select',id:target.id});
    }
  };

  return (
    <Abubble
      ref={tiltNode}
      onClick={e => clickHandler(e)}
      pos={props.pos}
      size={props.size}
      wiggle={props.wiggle}
      wiggleDur={props.wiggleDur}
      duration={props.duration}
      delayDist={props.delayDist}
      z={props.z}
      pendingEdit={props.id && props.id === parseInt(props.bubbleControl.id)}
    >
      <div
        id={props.id}
        onMouseEnter={e => mouseEnterHandler(e)}
        onMouseLeave={e => (e.target.style.backgroundColor = "unset")}
      >
        <h2>{props.title}</h2>
        <p>{props.textBody}</p>
      </div>
    </Abubble>
  );
};
export default Bubble;
