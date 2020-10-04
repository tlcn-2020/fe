import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { indigo } from "@material-ui/core/colors";
import MOVIES_DATA from "../data/movies";
import { Rating } from "@material-ui/lab";

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

function MovieDetail({ match }) {
  const movieId = match.params.movieId;
  const movie = MOVIES_DATA.filter((movie) => movie.id === movieId)[0];
  console.log(JSON.stringify(movie, null, 2));
  const classes = useStyles();

  return (
    <Container>
      <header className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          <Link to="/">Movie Searcher</Link>
        </Typography>
      </header>
      <main>
        <Box className="movie-container">
          <div className="movie-intro">
            <div
              className="image"
              style={{ backgroundImage: `url(${movie.posterurl})` }}
            >
              <img alt="movie poster" src={movie.posterurl} />
            </div>
            <div className="intro">
              <h2 className="title">{movie.title}</h2>
              <ul className="detail">
                <li>
                  Year: <span>{movie.year}</span>
                </li>
                <li>
                  Genres: <span>{movie.genres.join(",")}</span>
                </li>
                <li>
                  Duration: <span>{movie.duration}</span>
                </li>
              </ul>
              <div className="rating">
                <h2>Rating</h2>
                <Rating
                  name="rating"
                  value={
                    movie.ratings.reduce((s, v) => s + v, 0) /
                    movie.ratings.length
                  }
                  max={10}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="story-line">
            <h2>Story Line</h2>
            {movie.storyline}
          </div>
        </Box>
      </main>
    </Container>
  );
}

export default MovieDetail;
