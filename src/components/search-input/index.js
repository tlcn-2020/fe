/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles, InputBase, fade, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { indigo } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import MyAutoComplete from "./auto-complete";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
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

function SearchInput({ onChange, onKeyDown, styleProp }) {
  //STATE
  const [search, setSearch] = useState("");
  // HOOK
  const classes = useStyles(styleProp);

  useEffect(() => {
    onChange && onChange(search);
  }, [search]);

  return (
    <Box className={classes.container}>
      <div
        className={`${classes.search} ${
          search.length > 0 && classes.hasSearchValue
        }`}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onKeyDown={(e) => {
            onKeyDown && onKeyDown(e);
          }}
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
    </Box>
  );
}

export default SearchInput;
