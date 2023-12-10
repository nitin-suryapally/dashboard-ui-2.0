
import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Innerbox from './Innerbox';
import { Divider } from '@mui/material';
const Equipment = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      p={isSmallScreen ? '10px' : '20px'}
      width={isSmallScreen ? '100%' : '100%'}
    //   border="1px solid grey"
      display="flex"
      flexDirection="column"
    >
      <Typography variant={isSmallScreen ? 'body1' : 'h6'} mb={isSmallScreen ? '5px' : '10px'}>
        Equipment Status
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" width="100%">
        <Innerbox  title={"in-service"} number={"21"} colour={"orange"}/>
        <Divider />
        <Innerbox title={"inactive"} number={"9"} colour={"red"} />
      </Box>
    </Box>
  );
};

export default Equipment;
