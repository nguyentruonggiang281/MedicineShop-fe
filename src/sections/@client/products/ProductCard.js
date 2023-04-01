import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const textStyle = {
  height: '50px',
  overflow: 'hidden',
  display: 'block',
  textOverflow: 'ellipsis',
};
// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, status, unit } = product;

  return (
    <Card >
      <Box sx={{ pt: '100%', position: 'relative'}}>
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
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: '24px 16px'}} >
       
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle1" style={textStyle}  >
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center">
          <Typography variant="body1"
            sx={{
              color: 'primary.main',
            }}>
            {fCurrency(price)}đ
            
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.secondary',
              }}
            >
              &nbsp;/&nbsp;{unit}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}