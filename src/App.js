import styled from "styled-components";

import Detail from "./Detail";
import Main from "./Main";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/detail/:week_day" exact>
          <Detail />
        </Route>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  max-width: 300px;
  width: 80vw;
  height: 90vh;
  background-color: #f4f4f6;
  border: 2px solid #9c9899;
  border-radius: 20px;
  margin: 5vh auto;
  overflow: auto;
`;
export default App;
