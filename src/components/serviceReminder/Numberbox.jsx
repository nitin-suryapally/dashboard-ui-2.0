import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { tokens } from '../../theme';

const Numberbox = ({ number, text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const ismedimumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent= "space-between" m="0">
      <Box>
        <Typography variant={isSmallScreen ? 'body2' : ismedimumScreen ? "h4" : "h3"} style={{ color: colors.orange[400], margin: '10px' }}>
          {number}
        </Typography>
      </Box>
      <Typography variant={isSmallScreen ? 'subtitle1' : 'subtitle2'}>{text}</Typography>
    </Box>
  );
};

export default Numberbox;

