import {BrowserRouter as Router, Route } from "react-router-dom";
import Browse from "./views/Browse";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Route exact path="/"><Browse /></Route>
      <Route exact path="/:login"><Home /></Route>
      <Route exact path="/:login/:readme"><Home /></Route>
    </Router>
  );
}

export default App;
