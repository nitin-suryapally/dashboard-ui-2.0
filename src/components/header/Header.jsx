import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const Header = ({ title }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" justifyContent={ "left"}>
      <Typography
        variant = {isSmallScreen ? 'h6' : 'h5'}
        color="black"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
