/* eslint-disable react-hooks/exhaustive-deps */
import { Container, makeStyles, Typography } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../components/movie-list";
import SearchInput from "../components/search-input";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderBottom: "1px solid #eee",
  },
  title: {
    color: indigo[500],
    marginRight: theme.spacing(2),
    "& a": {
      textDecoration: "none !important",
    },
  },
}));

const Search = ({ location, history }) => {
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  //STATE
  const [search, setSearch] = useState(query);
  const [movies, setMovies] = useState([]);
  //HOOK
  const classes = useStyles();

  useEffect(() => {
    history.push(`/search?q=${search}`);
  }, [search]);

  return (
    <Container>
      <header className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          <Link to="/">Movie Searcher</Link>
        </Typography>
        <SearchInput
          value={search}
          onChangeMovie={(movies) => {
            setMovies(movies);
          }}
          onChange={(value) => {
            setSearch(value);
          }}
        />
      </header>
      <main>
        <Typography variant="h6">
          Search results for: {search} ({movies.length})
        </Typography>

        {search.length > 0 && <MovieList movies={movies||[]} history={history} />}
      </main>
    </Container>
  );
};

export default Search;
