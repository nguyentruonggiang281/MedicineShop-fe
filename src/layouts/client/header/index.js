import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import Logo from '../../../components/logoHome';
//
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
// ----------------------------------------------------------------------


const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 70;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.primary.main }),
  boxShadow: 'none',
  
  [theme.breakpoints.up('lg')]: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    width: "1200px"
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const visibleThreshold = 100;
      setScrolled(scrollY > visibleThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledRoot sx={{
      bgcolor: isScrolled ? 'transparent' : 'theme.palette.primary.main',
      boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
      transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
    }}>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 2,
            display: { lg: 'none' },
            color: isScrolled ? 'primary' : 'inherit',
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Logo />

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 1.5,
            sm: 4
          }}
        >

          <NotificationsPopover />

          <AccountPopover />

        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
