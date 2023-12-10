import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import src from '../../asserts/goku-amoled-super-10000x5736-12116.png';

const SingleComment = ({ timestamp }) => {
  const timediff = () => {
    const currentTime = new Date();
    const commentTime = new Date(timestamp);
    const diffInMillis = currentTime - commentTime;
    const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));

    return diffInMinutes;
  };

  return (
    <Box mb={1}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Avatar src={src} alt="profile pic" sx={{ mr: '10px' }} />
          <Box display="flex" flexDirection="column" >
            <Typography variant="body2" gutterBottom>
              Nitin Suryapally
            </Typography>
            <Typography variant="body2" gutterBottom>
              Frontend development is what I am good at.
            </Typography>
          </Box>

        </Box>

        <Typography variant="caption" color="textSecondary">
          {timediff()} minute{timediff() !== 1 ? 's' : ''} ago
        </Typography>
      </Box>

    </Box>
  );
};

export default SingleComment;
