import React, { useState } from "react";
import styled from "styled-components";
import { Edit, Message, Pop } from "../config/Assets";

const Bar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 10px;
  border-radius: 10px;
  background: #2d94b280;
  box-shadow: 0 0 30px 14px #f3fbfefc;
  height: 40px;
  div {
    color: white;
    width: 125px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  form {
    width: 85vw;
    display: flex;
    input {
      width: 20%;
      box-shadow: 0 0 10px 4px #f3fbfefc;
      background: #ffffffcc;
      margin: 0 15px;
      padding: 2px 4px;
      border-radius: 5px;
      border-style: none;
    }
    .textBody {
      width: 79%;
    }
    button {
      display: none;
    }
  }
`;

const ToolBar = props => {
  return (
    <Bar>
      <form>
        <input placeholder="title" />
        <input className="textBody" placeholder="message" />
        <button />
      </form>
      <div>
        <Edit />
        <Message />
        <Pop />
      </div>
    </Bar>
  );
};

export default ToolBar;
