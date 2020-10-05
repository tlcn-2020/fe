/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Button,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { indigo, red } from "@material-ui/core/colors";
import Image from "material-ui-image";
import { isEmpty } from "lodash";
import { getRequest } from "../api";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderBottom: "1px solid #eee",
    background:theme.palette.background.paper,
    marginBottom:'0.5rem'
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
  actorList: {
    overflowX: "auto",
    maxHeight: "150px",
  },
  movieInfoList: {
    flex: 1,
    overflow: "auto",
    position: "relative",
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
      <Box component="main" style={{ background: "#f0f2f5" }}>
        {movie ? (
          <Box boxShadow={1}>
            <Box
              display="flex"
              height={500}
              position="relative"
              padding={2}
              style={{ background: "#fff" }}
            >
              <Box
                className="image"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}
                marginRight={2}
                width="30%"
              >
                <Image
                  alt="movie poster"
                  src={movie.image}
                  style={{ height: "100%" }}
                />
                <Box
                  position="absolute"
                  bottom={0}
                  marginBottom={3}
                  marginLeft={1}
                >
                  <Button variant="contained" className={classes.watchBtn}>
                    Watch movie
                  </Button>
                </Box>
              </Box>
              <Box flexGrow={1}>
                <Typography variant="h4">{movie.name}</Typography>
                <List
                  subheader={
                    <ListSubheader style={{ background: "#fff" }}>
                      Movie information
                    </ListSubheader>
                  }
                  className={classes.movieInfoList}
                >
                  <ListItem>
                    <ListItemText>
                      <Box display="flex" alignItems="center">
                        <strong>IDMB: </strong>

                        {parseFloat(movie.imdb) ? (
                          <Rating
                            value={parseFloat(movie.imdb)}
                            max={10}
                            readOnly
                            style={{ marginLeft: "0.5rem" }}
                          />
                        ) : (
                          <span style={{marginLeft:'0.5rem'}}>Unknown</span>
                        )}
                      </Box>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Box display="flex" alignItems="center">
                        <strong>Nation:</strong>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {movie.national}
                        </span>
                      </Box>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Box display="flex" alignItems="center">
                        <strong>Genres:</strong>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {movie.categories.map((c) => c.name).join(", ")}
                        </span>
                      </Box>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Box display="flex" alignItems="center">
                        <strong>Duration:</strong>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {movie.time}
                        </span>
                      </Box>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Box display="flex" alignItems="center">
                        <strong>Release:</strong>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {!isEmpty(movie.relases) ? movie.relases : "Unknown"}
                        </span>
                      </Box>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Divider/>
            <Box
              style={{ background: "#fff" }}
              padding={2}
          
            >
              <Typography variant="h4">Actors</Typography>
              <Box
                display="flex"
                className={classes.actorList}
                flexDirection="column"
                flexWrap="wrap"
              >
                {movie?.artists?.length > 0 &&
                  movie.artists.map((artist, index) => (
                    <Box
                      key={index}
                      margin="0.5rem"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      minWidth={120}
                    >
                      <Avatar src={artist.image} alt={artist["first_name"]}/>
                      <Typography variant="subtitle1">
                        {artist["first_name"]}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
            <Divider/>
            <Box style={{ background: "#fff" }} padding={2}>
              <Typography variant="h4">Description</Typography>
              <Typography paragraph> {movie.description}</Typography>
            </Box>
          </Box>
        ) : (
          <Typography>No movie detail found</Typography>
        )}
      </Box>
    </Container>
  );
}

export default MovieDetail;
