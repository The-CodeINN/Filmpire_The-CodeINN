import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

function Profile() {
  const user = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add some movies to your favorites to see them here.
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  );
}

export default Profile;
