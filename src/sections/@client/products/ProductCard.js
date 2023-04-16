import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
// ----------------------------------------------------------------------

const CustomCard = styled(Card)(() => ({
  transition: `all 0.3s ease-in-out`,
  '&:hover': {
    transform: `scale(1.07)`,
    boxShadow: `20px 20px 50px rgba(0, 0, 0, 0.6), 
                -20px -20px 50px rgba(255, 255, 255, 0.2)`
  }
}));

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const textStyle = {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  lineHeight: 1.2,
  height: '2.4em', // 2 lines * line-height of 1.2
};
// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
  sx: PropTypes.object,
};

export default function ShopProductCard({ product = [], sx }) {
  const { name, cover, price, status, unit } = product;

  return (
    <CustomCard sx={sx} >
      <Link underline='none' href='#'>
        <Box sx={{ pt: '100%', position: 'relative' }} >
          {status && (
            <Label
              variant="filled"
              color={'primary'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                borderRadius: 20,
                position: 'absolute',
              }}
            >
              {status}
            </Label>
          )}
          <StyledProductImg href={'#'} alt={name} src={cover} />
        </Box>
      
      <Stack spacing={1} sx={{ p: '24px 16px' }} >

        <Link color="inherit" underline="hover" href='#'>
          <Typography  color={'text.primary'} variant="subtitle1" style={textStyle}  >
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center">
          <Typography variant="body1"
            color={'primary.main'}>
            {fCurrency(price)}đ

            <Typography
              component="span"
              variant="body1"
              
                color={'text.secondary'}
             
            >
              &nbsp;/&nbsp;{unit}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      </Link>
    </CustomCard>
  );
}
