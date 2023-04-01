import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const visibleThreshold = document.documentElement.offsetHeight - window.innerHeight;
      setVisible(scrollY > visibleThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{
      position: 'fixed',
      
      width: '100%',
      bgcolor: 'background.paper',
      p: 2,
      bottom: isVisible ? 0 : -100,
      transition: 'bottom 0.3s ease-in-out',
    }}>
      <Typography>asuhoahskj kasjh</Typography>
    </Box>
  );
};

export default Footer;
