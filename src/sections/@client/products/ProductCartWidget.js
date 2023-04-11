// @mui
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 },
  [theme.breakpoints.down('lg')]: {
    top: theme.spacing(9),

  },
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  return (
    <a href='/checkout'>
    <StyledRoot >
      <Badge showZero badgeContent={0} color="error" max={10}>
        <SvgColor src={`/assets/icons/navbar/ic_cart.svg`} sx={{ width: 24, height: 24 }} />
      </Badge>
    </StyledRoot>
    </a>
  );
}
