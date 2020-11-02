/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  CircularProgress,
  Container,
  makeStyles,
  Select,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";
import { indigo, red } from "@material-ui/core/colors";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import MovieList from "../components/movie-list";
import SearchInput from "../components/search-input";

const nations = [
  "Việt Nam",
  "Trung Quốc",
  "Mỹ",
  "Hàn Quốc",
  "Nhật Bản",
  "Hồng Kong",
  "Ấn Độ",
  "Thái Lan",
  "Pháp",
  "Đài Loan",
  "Úc",
  "Canada",
  "Anh",
];

const releaseYears = [2020, 2019, 2018, 2017, 2016];

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderBottom: "1px solid #919191",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  title: {
    color: indigo[500],
    marginRight: theme.spacing(2),
    "& a": {
      textDecoration: "none !important",
    },
  },
  filterTitle: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
}));

const Search = ({ location, history }) => {
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  //STATE
  const [search, setSearch] = useState(query);
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  //HOOK
  const classes = useStyles();
  const { filter, setFilter } = useContext(AppContext);
  useEffect(() => {
    history.replace(`/search?q=${search}`);
  }, [search]);

  //FUNCTION
  const handleChange = (path, e) => {
    setFilter((state) => ({ ...state, [path]: e.target.value }));
  };

  const handleClearFilters = () => {
    setFilter({
      year: "1",
      nation: "1",
    });
  };

  const shouldShowRemoveFilters = () => {
    return Object.values(filter).some((f) => f !== "1");
  };

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
          setIsSearching={setIsSearching}
          filter={filter}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          margin="2rem 0"
        >
          <Box
            width="calc(100% / 5)"
            display="flex"
            flexDirection="column"
            marginRight="1rem"
          >
            <Typography variant="subtitle2" className={classes.filterTitle}>
              Nations:
            </Typography>
            <Select
              value={filter.nation}
              onChange={(e) => {
                handleChange("nation", e);
              }}
            >
              <MenuItem value="1">Select a nation</MenuItem>
              {nations.map((nation) => (
                <MenuItem key={nation} value={nation}>
                  {nation}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box
            width="calc(100% / 5)"
            display="flex"
            flexDirection="column"
            marginRight="1rem"
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Release Year:
            </Typography>
            <Select
              value={filter.year}
              onChange={(e) => {
                handleChange("year", e);
              }}
            >
              <MenuItem value="1">Select a year</MenuItem>
              {releaseYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        {shouldShowRemoveFilters() && (
          <Button
            variant="contained"
            style={{ background: red[500], color: "white" }}
            onClick={handleClearFilters}
          >
            Clear filters
          </Button>
        )}
      </header>
      <main>
        <Typography variant="h6">
          Search results for: {search} ({movies.length})
        </Typography>

        {isSearching ? (
          <CircularProgress
            color="secondary"
            size={40}
            style={{ margin: "auto", color: indigo[500], display: "block" }}
          />
        ) : movies.length === 0 ? (
          <Typography variant="h4">No movies found</Typography>
        ) : (
          <MovieList movies={movies || []} history={history} />
        )}
      </main>
    </Container>
  );
};

export default Search;
