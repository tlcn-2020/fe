/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles, InputBase, fade, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { indigo } from "@material-ui/core/colors";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import MyAutoComplete from "./auto-complete";
import { postRequest } from "../../api";

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
    width: "100%",
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

function SearchInput({
  value = "",
  onChange,
  onKeyDown,
  styleProp,
  onChangeMovie,
}) {
  //STATE
  const [search, setSearch] = useState(value);
  const [movies, setMovies] = useState([]);
  const [didSearch, setDidSearch] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(true);

  //FUNCTION
  const turnOffAutoComplete = useCallback(() => {
    setShowAutocomplete(false);
  });
  const callOuterOnChange = useCallback(() => {
    onChange && onChange(search);
  }, [search]);

  const searchFunc = useCallback(async () => {
    const res = await postRequest("/search", { name: search });
    if (!res.hasError) {
      setMovies(res.data);
      onChangeMovie && onChangeMovie(res.data);
    }
  }, [search]);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    setDidSearch(true);
  });

  // HOOK
  const classes = useStyles(styleProp);
  useEffect(() => {
    callOuterOnChange();
    searchFunc();
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
            handleChange(e);
          }}
          onKeyDown={(e) => {
            onKeyDown && onKeyDown(e);
          }}
        />
      </div>
      {search.length > 0 && didSearch && showAutocomplete && (
        <Suspense fallback={<div>...</div>}>
          <MyAutoComplete movies={movies} />
        </Suspense>
      )}
    </Box>
  );
}

export default SearchInput;
