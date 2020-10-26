import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main.js";
import MovieDetail from "./pages/movie-detail.js";
import Search from "./pages/search.js";
import "./app.scss";

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";

function App() {
  const [filter, setFilter] = useState({
    year: "1",
    nation: "1",
  });

  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search-detail/:movieId" component={MovieDetail} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
