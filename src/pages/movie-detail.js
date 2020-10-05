/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { indigo, red } from "@material-ui/core/colors";
import Image from "material-ui-image";
import { isEmpty } from "lodash";
import { getRequest } from "../api";

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
  watchBtn: {
    background: red[500],
    color: "#fff",
    "&:hover": {
      background: red[700],
    },
  },
}));

function MovieDetail({ match }) {
  const movieId = match.params.movieId;
  //STATE
  const [movie, setMovie] = useState(null);

  //HOOK
  const classes = useStyles();
  useEffect(() => {
    getRequest(`/movie-detail/${movieId}`).then((res) => {
      if (!res.hasError) {
        setMovie(res.data);
      }
    });
  }, []);

  return (
    <Container>
      <header className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          <Link to="/">Movie Searcher</Link>
        </Typography>
      </header>
      <main>
        {movie ? (
          <Box className="movie-container">
            <div className="movie-intro">
              <div
                className="image"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <Image
                  alt="movie poster"
                  src={movie.image}
                  style={{ height: "100%" }}
                />
                <Box position="absolute" bottom={0} margin={0.5}>
                  <Button variant="contained" className={classes.watchBtn}>
                    Watch movie
                  </Button>
                </Box>
              </div>
              <div className="intro">
                <h2 className="title">{movie.name}</h2>
                <ul className="detail">
                  <li>
                    IDMB:{" "}
                    <span>{isEmpty(movie.imdb) ? "Unknown" : movie.imdb}</span>
                  </li>
                  <li>
                    Nation: <span>{movie.national}</span>
                  </li>
                  <li>
                    Genres:{" "}
                    <span>
                      {movie.categories.map((c) => c.name).join(", ")}
                    </span>
                  </li>
                  <li>
                    Release:
                    <span>
                      {" "}
                      {!isEmpty(movie.relases) ? movie.relases : "Unknown"}
                    </span>
                  </li>
                  <li>
                    Duration: <span>{movie.time}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="story-line">
              <h2>Description</h2>
              {movie.description}
            </div>
          </Box>
        ) : (
          <Typography>No movie detail found</Typography>
        )}
      </main>
    </Container>
  );
}

export default MovieDetail;
