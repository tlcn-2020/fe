import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main.js";
import Search from "./pages/search.js";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
}

export default App;
