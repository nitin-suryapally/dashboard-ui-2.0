import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Numberbox from './Numberbox';

const Chat = () => {
  const theme = useTheme();
  const ismidScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={isSmallScreen ? '8px' : '16px' }  display="flex" flexDirection="column" justifyContent="space-between" >
      <Typography variant={isSmallScreen ? "body2" : ismidScreen ? "h5" : "h5"}  mb={isSmallScreen ? '3px' : ismidScreen ? "5px" : "10px"}>
        Service Reminder
      </Typography>
      <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center" justifyContent="space-between" width="100%">
        <Numberbox number="9" text="Due Soon" />
        <Numberbox number="7" text="Overdue" />
      </Box>
    </Box>
  );
};

export default Chat;




