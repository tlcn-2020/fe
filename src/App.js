import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main.js";
import MovieDetail from "./pages/movie-detail.js";
import Search from "./pages/search.js";
import "./app.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/search-detail/:movieId" component={MovieDetail} />
    </Switch>
  );
}

export default App;
