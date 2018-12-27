import React, { useRef, useLayoutEffect, useState, useGlobal } from "reactn";
import VanillaTilt from "vanilla-tilt";
import { Abubble } from "../config/styled-containers";

const Bubble = ({ bubbleStats, title, textBody, id }) => {
  const [destroyed, setDestroy] = useState(false);
  const tiltNode = useRef();
  // eslint-disable-next-line
  const [global, setGlobal] = useGlobal();

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

    if (global.status === "delete") {
      target.style.backgroundColor = "#ff000080";
    }
    if (global.status === "edit") {
      target.style.backgroundColor = "#66ff6680";
    }
  };

  const clickHandler = e => {
    let target =
      e.target.localName === "h2" || e.target.localName === "p"
        ? e.target.parentNode
        : e.target;
    if (global.status === "delete") {
      setDestroy(true);
      target.style.display = "none";
      global.deleteNote(target.id);
    }
    if (global.status === "edit") {
      global.editSelect(target.id);
    }
  };

  return (
    <Abubble
      ref={tiltNode}
      onClick={e => clickHandler(e)}
      {...bubbleStats}
      pendingEdit={global.status === "editSelect" && id === parseInt(global.id)}
      bubblePointer={global.status === "delete" || global.status === "edit"}
    >
      <div
        id={id}
        onMouseEnter={e => mouseEnterHandler(e)}
        onMouseLeave={e => (e.target.style.backgroundColor = "unset")}
      >
        <h2>{title}</h2>
        <p>{textBody}</p>
      </div>
    </Abubble>
  );
};
export default Bubble;
