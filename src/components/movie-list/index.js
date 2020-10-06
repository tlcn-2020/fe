import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  movie: {
    width: `calc(100% / 5 - 1rem)`,
    padding: theme.spacing(1),
    transition: "transform 0.5s ease",
    cursor: "pointer",
    margin: "0.5rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% / 3 - 1rem)`,
    },
  },
  media: {
    height: 250,
    backgroundPosition: "center",
  },
}));

const MovieList = ({ movies = [], history }) => {
  //HOOK
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {movies.length > 0 &&
        movies.map((movie) => (
          <Card
            key={movie["_id"]}
            className={classes.movie}
            onClick={() => {
              history.push(`/search-detail/${movie["_id"]}`);
            }}
          >
            <CardHeader subheader={movie.relases} title={movie.name} />
            <Rating
              max={10}
              value={parseInt(movie.imdb) || 0}
              readOnly
              name="rating"
              size="small"
            />
            <CardMedia
              title={movie.name}
              image={
                movie.image ||
                process.env.PUBLIC_URL + "/images/placeholder.JPG"
              }
              className={classes.media}
            />
          </Card>
        ))}
    </Box>
  );
};

export default MovieList;
