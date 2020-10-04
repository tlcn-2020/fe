import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MOVIES_DATA from "../../data/movies";
import { Rating } from "@material-ui/lab";
import Masonry from "react-masonry-component";

const useStyles = makeStyles((theme) => ({
  movie: {
    width: "20%",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
  },
  media: {
    height: 250,
    backgroundPosition: "center",
  },
}));

const MovieList = ({ search }) => {
  //HOOK
  const classes = useStyles();
  const filterMovies = MOVIES_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Masonry>
      {filterMovies.map((movie) => (
        <Card key={movie.title} className={classes.movie}>
          <CardHeader subheader={movie.releaseDate} title={movie.title} />
          <Rating value={2} disabled name="rating" />
          <CardMedia
            title={movie.title}
            image={
              movie.posterurl ||
              process.env.PUBLIC_URL + "/images/placeholder.png"
            }
            className={classes.media}
          />
          <CardContent>
            {movie.storyline.length ? movie.storyline : "No descriptions"}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <VisibilityIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Masonry>
  );
};

export default MovieList;
