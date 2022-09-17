import React, { useEffect, useState } from "react";
import { Container, AppBar, Grid, Typography, Grow } from "@material-ui/core";
import memoriez from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();

  // ! creating a state for demostration purposes
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  // use effect helps us to mount the data and update the data
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memoriez}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} lg={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
