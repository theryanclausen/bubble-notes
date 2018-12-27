import styled from "styled-components";

export const Abubble = styled.div`
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
cursor: ${props => props.bubblePointer ? 'pointer': 'auto'}
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

export const Bar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
width: ${props => (props.viewBar ? "95vw" : "125px")};
top: 25px;
right: 15px;
border-radius: 10px;
background: #2d94b280;
box-shadow: 0 0 30px 14px #f3fbfefc;
height: 40px;
@media (max-width: 700px) {
  height: ${props => (props.viewBar ? "200px" : "125px")};
  width: ${props => (props.viewBar ? "95vw" : "40px")};
}
div {
  color: white;
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
  @media (max-width: 700px) {
    width: 40px;
    height: 125px;
    flex-direction: column;
  }
  div {
    z-index: 500;
    &:hover {
      cursor: pointer;
    }
  }
  .delete {
    color: ${props => (props.status === "delete" ? "red" : "white")};
  }
  .edit {
    color: ${props => (props.status === "edit" ? "lightGreen" : "white")};
  }
  .create {
    color: ${props => (props.status === "newNote" ? "yellow" : "white")};
  }
}
form {
  z-index: 200;
  width: 100%;
  height: 100%;
  display: ${props => (props.viewBar ? "flex" : "none")};
  @media (max-width: 700px) {
    flex-direction: column;
  }
  input,
  textarea {
    width: 20%;
    box-shadow: 0 0 10px 4px #f3fbfefc;
    background: #ffffff;
    margin: 8px;
    padding: 4px 12px;
    border-radius: 12px;
    border-style: none;
    color: #1a6670;
    font-family: "Josefin Sans", sans-serif;
    font-weight: bold;
    outline: none;
    font-size: 17px;
    @media (max-width: 700px) {
      width: 95%;
    }
  }
  textarea {
    width: 79%;
    resize: none;
    overflow: hidden;
    @media (max-width: 700px) {
      width: 95%;
      height: 100%;
    }
  }
  button {
    display: none;
  }
}
`;