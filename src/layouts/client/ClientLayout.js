import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';
// import Footer from './footer';
import { ProductCartWidget } from '../../sections/@client/products';



// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 40;
const APP_BAR_DESKTOP = 99;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    
  },
}));

// ----------------------------------------------------------------------

export default function ClientLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />

        <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <ProductCartWidget />
      <Main>
        <Outlet />
      </Main>
      
      {/* <Footer/> */}
    </StyledRoot>
  );
}
