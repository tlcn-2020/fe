import React from "react";
import {
  makeStyles,
  fade,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@material-ui/core";
import MOVIES_DATA from "../data/movies";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80ch",
    overflow: "auto",
    maxHeight: 500,
    margin: "0 auto",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    borderRadius: "1rem",
    border: "1px solid #ccc",
    borderTopLeftRadius: 0,
    borderTop: "none",
    borderTopRightRadius: 0,
  },
  movieItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
  },
}));

const MyAutoComplete = ({ search }) => {
  const classes = useStyles();
  const filterMovies = MOVIES_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <List className={classes.container}>
      {filterMovies.length > 0 ? (
        filterMovies.map((movie) => (
          <ListItem key={movie.id} className={classes.movieItem}>
            <ListItemIcon>
              <Avatar src={movie.posterurl} alt={movie.title}>
                {movie.title}
              </Avatar>
            </ListItemIcon>
            <ListItemText>{movie.title}</ListItemText>
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText>No results</ListItemText>
        </ListItem>
      )}
    </List>
  );
};

export default MyAutoComplete;
