/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Typography, makeStyles } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import React, { useCallback, useEffect, useState } from "react";
import SearchInput from "../components/search-input";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    color: indigo[500],
    fontWeight: "medium",
    marginBottom: theme.spacing(6),
  },
}));

function Main({ history }) {
  //STATE
  const [search, setSearch] = useState("");
  // HOOK
  const classes = useStyles();

  const handleNavigateToSearch = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        history.push(`/search?q=${search}`);
      }
    },
    [search]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleNavigateToSearch);
    return () => {
      window.removeEventListener("keydown", handleNavigateToSearch);
    };
  });

  return (
    <Container className={classes.container}>
      <Typography variant="h2" align="center" className={classes.header}>
        Movie Searcher
      </Typography>
      <SearchInput onChange={(value) => setSearch(value)} />
    </Container>
  );
}

export default Main;
