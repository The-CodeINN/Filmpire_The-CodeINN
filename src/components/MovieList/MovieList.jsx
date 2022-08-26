import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

function MovieList({ movies, numberOfMovies }) {
  const classes = useStyles();

  return (
    <Grid className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
