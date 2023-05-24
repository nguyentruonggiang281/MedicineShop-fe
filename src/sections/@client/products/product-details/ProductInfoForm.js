import React from 'react';
import ReactHtmlParser from "html-react-parser";
import { Typography,  Grid, Stack } from '@mui/material';
import PropTypes from 'prop-types';

ProductInfoForm.propTypes={
  product: PropTypes.object,
}
/**
 * This function returns a form containing information about a product.
 * @param {object} product - The product for which to display information.
 * @returns {JSX.Element} - The JSX element containing the product information.
 */
function ProductInfoForm({ product }) {
  return (
    <Grid container spacing={1}>

      {/* Brand */}
      <Stack spacing={0}>
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Thương hiệu: </Typography>
            <Typography variant="body1">{product.brand}</Typography>
          </Stack>
        </Grid>

        {/* Product name */}
        <Grid item xs={12}>
          <Typography color={'#022864'} variant="h4">{product.name}</Typography>
        </Grid>
      </Stack>

      {/* Price */}
      <Grid item xs={12} sx={{ borderTop: '1px dashed lightgrey' }}>
        <Stack direction={'row'} alignItems="center" spacing={1}>
          <Typography variant="h3">{product.price}đ</Typography>
          <Typography pt={1} color={'text.secondary'} variant="h6">&nbsp;/&nbsp;Hộp</Typography>
        </Stack>
      </Grid>

      {/* Category */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Danh mục: </Typography>
          <Typography variant="body1">{product.brand}</Typography>
        </Stack>
      </Grid>

      {/* Dosage form */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Dạng bào chế:</Typography>
          <Typography variant="body1">{product.unit}</Typography>
        </Stack>
      </Grid>

      {/* Packaging */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Quy cách:</Typography>
          <Typography variant="body1">{product.unit}</Typography>
        </Stack>
      </Grid>

      {/* Health benefits */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Hỗ trợ:</Typography>
          <Typography variant="body1">{product.usage}</Typography>
        </Stack>
      </Grid>

      {/* Country of origin */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Xuất xứ thương hiệu:</Typography>
          <Typography variant="body1">{product.origin} </Typography>
        </Stack>
      </Grid>

      {/* Manufacturer */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Nhà sản xuất:</Typography>
          <Typography variant="body1">{product.manufacturer} </Typography>
        </Stack>
      </Grid>

      {/* short_description */}
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Công dụng: 
          <Typography variant="body1">
          { ReactHtmlParser(decodeURIComponent(product.short_description))}
            </Typography>
        </Typography>
      </Grid>

    </Grid>
  );
};


export default ProductInfoForm;
