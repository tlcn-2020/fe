/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles, InputBase, fade, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { indigo } from "@material-ui/core/colors";
import React, { useCallback, useEffect, useState } from "react";
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

function SearchInput({ value = "", onChange, onKeyDown, styleProp }) {
  //STATE
  const [search, setSearch] = useState(value);
  const [didSearch, setDidSearch] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(true);
  // HOOK
  const classes = useStyles(styleProp);
  const turnOffAutoComplete = useCallback(() => {
    setShowAutocomplete(false);
  });
  useEffect(() => {
    onChange && onChange(search);
  }, [search]);

  useEffect(() => {
    window.addEventListener("click", turnOffAutoComplete);
    return () => {
      window.removeEventListener("click", turnOffAutoComplete);
    };
  });

  return (
    <Box
      className={classes.container}
      onClick={(e) => {
        e.stopPropagation();
        setShowAutocomplete(true);
      }}
    >
      <div
        className={`${classes.search} ${
          search.length > 0 &&
          didSearch &&
          showAutocomplete &&
          classes.hasSearchValue
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
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setDidSearch(true);
          }}
          onKeyDown={(e) => {
            onKeyDown && onKeyDown(e);
          }}
        />
      </div>
      {search.length > 0 && didSearch && showAutocomplete && (
        <MyAutoComplete search={search} />
      )}
    </Box>
  );
}

export default SearchInput;
