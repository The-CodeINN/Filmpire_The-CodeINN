import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory,
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName, page,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" ml="20px">
        <Typography variant="h4">No movies that match that name.</Typography>
        <br />
        Please search for another movie.
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" ml="20px">
        <Typography variant="h4">Error: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
