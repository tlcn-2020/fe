import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Rating } from "@material-ui/lab";
import Masonry from "react-masonry-component";

const useStyles = makeStyles((theme) => ({
  movie: {
    width: `calc(100% / 5)`,
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    transition: "transform 0.5s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% / 3)`,
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
    <Masonry>
      {movies.map((movie) => (
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
          />
          <CardMedia
            title={movie.name}
            image={
              movie.image || process.env.PUBLIC_URL + "/images/placeholder.JPG"
            }
            className={classes.media}
          />
          <CardContent>
            {movie.description.length ? movie.description : "No descriptions"}
          </CardContent>
        </Card>
      ))}
    </Masonry>
  );
};

export default MovieList;
