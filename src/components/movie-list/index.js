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

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    maxHeight: 1100,
  },
  movie: {
    width: "250px",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  media: {
    height: 250,

    backgroundPosition: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const MovieList = ({ search }) => {
  //HOOK
  const classes = useStyles();
  const filterMovies = MOVIES_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.container}>
      {filterMovies.map((movie) => (
        <Card key={movie.id} className={classes.movie}>
          <CardHeader subheader={movie.releaseDate} title={movie.title} />
          <Rating value={2} disabled />
          <CardMedia
            title={movie.title}
            image={movie.posterurl}
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
    </div>
  );
};

export default MovieList;
