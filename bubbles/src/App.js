import React from "react";
import { Route } from "react-router-dom";
import NotesView from "./components/NotesView";
import styled from 'styled-components'
import Bubble from "./components/Bubble";

const Background = styled.div `
  width: 100vw;
  height: 100vh;
  background: #3cc2e8;
`

const App = () => (
  <Background>
    <Route exact path="/" component={NotesView} />
    <Bubble pos='25%' size='135px' wiggle='100px' wiggleDur='3s' duration='15s'></Bubble>
  </Background>
);

export default App;
