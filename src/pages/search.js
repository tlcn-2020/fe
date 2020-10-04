import { Container, makeStyles, Typography } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import React from "react";
import SearchInput from "../components/search-input";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  title: {
    color: indigo[500],
    marginRight: theme.spacing(2),
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <Container>
      <header className={classes.header}>
        <Typography variant="h5" className={classes.title}>
          Movie Searcher
        </Typography>
        <SearchInput />
      </header>
    </Container>
  );
};

export default Search;
