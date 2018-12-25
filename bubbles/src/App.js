import React from "react";
import Notes from "./components/Notes";
import styled from "styled-components";
import Bubbles from "./components/Bubbles";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #3cc2e8;
  overflow: hidden;
`;

const App = () => {

return (
  <Background>
    <Notes />
    <Bubbles />
  </Background>
);
}
export default App;
