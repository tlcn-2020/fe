import React from "react";
import Image from "material-ui-image";
import {
  makeStyles,
  fade,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80ch",
    overflow: "auto",
    maxHeight: 300,
    margin: "0 auto",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    border: "1px solid #ccc",
    borderTopLeftRadius: 0,
    borderTop: "none",
    borderTopRightRadius: 0,
    position: "absolute",
    zIndex: 1,
  },
  movieItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
  },
  movieImage: {
    width: 40,
    height: 40,
  },
}));

const MyAutoComplete = ({ movies = [] }) => {
  //HOOK
  const classes = useStyles();
  const history = useHistory();

  //FUNCTION

  return (
    <List className={classes.container}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <ListItem
            key={movie["_id"]}
            className={classes.movieItem}
            onClick={() => {
              history.push(`/search-detail/${movie["_id"]}`);
            }}
          >
            <ListItemIcon className={classes.movieImage}>
              <Image
                src={movie.image}
                alt={movie.name}
                imageStyle={{ borderRadius: "50%", width: 40, height: 40 }}
              />
            </ListItemIcon>
            <ListItemText>{movie.name}</ListItemText>
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
