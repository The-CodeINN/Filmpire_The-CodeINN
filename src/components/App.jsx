import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

import { Actors, Movies, MovieInformation, NavBar, Profile } from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path='/movie/:id'>
            <MovieInformation />
          </Route>
          <Route exact path='/actors/:id'>
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
