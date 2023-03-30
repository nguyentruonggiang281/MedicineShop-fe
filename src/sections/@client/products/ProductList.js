import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  limit: PropTypes.number,
};

export default function ProductList({ products,limit, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.slice(0, limit).map((product) => (
        <Grid key={product.id} item xs={11} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
