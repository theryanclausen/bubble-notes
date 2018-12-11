import React from "react";
import { Route } from "react-router-dom";
import NotesView from "./components/NotesView";
import styled from 'styled-components'
import Bubbles from "./components/Bubbles";

const Background = styled.div `
  width: 100vw;
  height: 100vh;
  background: #3cc2e8;
  overflow:hidden;
`

const App = () => (
  <Background>
    <Route exact path="/" component={NotesView} />
    <Bubbles></Bubbles>
  </Background>
);

export default App;
