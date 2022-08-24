import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import { genreOrCategory } from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategory.reducer,
    user: userReducer,
  },
});
