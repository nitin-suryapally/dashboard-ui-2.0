
import React, { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import { Box, Typography, Stack } from '@mui/material';

const Comments = () => {

  const [currentTimestamp , setCurrentTimestamp] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().getTime();
      setCurrentTimestamp(timestamp);
    }, 1000)

    return () => clearInterval(interval);
  }, [])


  return (
    <Box width='100%' height="300px" mx={{ xs: 0, sm: 2 }} display="flex" flexDirection="column" p={{ xs: 1, sm: 2 }}>
      <Typography variant="h6" mb={3}>
        Recent Comments
      </Typography>
      <Stack direction="column" spacing={1} sx={{height : "100%" , overflowY : "scroll"} } >
        <SingleComment timestamp= {currentTimestamp} />
        <SingleComment timestamp={currentTimestamp} />
        <SingleComment timestamp={currentTimestamp} />
        <SingleComment timestamp={currentTimestamp} />
        <SingleComment timestamp={currentTimestamp} />

      </Stack>
    </Box>
  );
};

export default Comments;
