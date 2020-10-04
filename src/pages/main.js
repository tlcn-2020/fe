import {
  Container,
  Typography,
  makeStyles,
  InputBase,
  fade,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { indigo } from "@material-ui/core/colors";
import React, { useState } from "react";
import MyAutoComplete from "../components/auto-complete";

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

  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: "1px solid #ccc",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "80ch",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: indigo[500],
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  hasSearchValue: {
    borderBottom: "none",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

function Main() {
  //STATE
  const [search, setSearch] = useState("");
  // HOOK
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" align="center" className={classes.header}>
        Movie Searcher
      </Typography>

      <div
        className={`${classes.search} ${
          search.length > 0 && classes.hasSearchValue
        }`}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search.length > 0 && <MyAutoComplete search={search} />}
    </Container>
  );
}

export default Main;
