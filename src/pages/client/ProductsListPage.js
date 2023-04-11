import React from 'react';
import { useState } from 'react';
import { Breadcrumbs, Container, Grid, Link, OutlinedInput, Stack, Typography, InputAdornment } from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import ShopFilterSidebar from '../../sections/@client/products/list-product/ProductFilterSidebar';
import ShopProductSort from '../../sections/@client/products/list-product/ProductSort';
import Iconify from '../../components/iconify/Iconify';
import { ProductList } from '../../sections/@client/products';

import PRODUCTS from '../../_mock/products-clone';
import { StyledSeparator } from '../../components/custom/CustomSpan';

// import MyCarousel from '../../components/slide/MyCarousel'


function ProductsList() {

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
    width: 320,
    transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
      width: 400,
      boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
  }));

  return (
    <>
      <Helmet>
        <title>Danh sách sản phẩm</title>
      </Helmet>


      <Container>
        <Grid container spacing={0} >
          {/* mục Trang chủ • Category • Tên sản phẩm */}
          <Grid item xs={12} mt={1} >
            <Breadcrumbs separator={<StyledSeparator>&nbsp;•&nbsp;</StyledSeparator>} aria-label="breadcrumb" >
              <Link underline="hover" color="text.primary" href="/home">
                Trang chủ
              </Link>
              <Link underline="hover" color="text.primary" href="#">
                Category
              </Link>

              <Typography color="inherit" >Tên sản phẩm</Typography>
            </Breadcrumbs>
          </Grid>

          <Grid item xs={12} >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap-reverse" 
              sx={{ my: 2  }}
            >

              <StyledSearch
                variant="outlined"
                placeholder="Search product..."
                startAdornment={
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                  </InputAdornment>
                }
              />
              <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ShopFilterSidebar
                  openFilter={openFilter}
                  onOpenFilter={handleOpenFilter}
                  onCloseFilter={handleCloseFilter}
                />
                <ShopProductSort />
              </Stack>
            </Stack>
            <ProductList products={PRODUCTS} limit={PRODUCTS.length -1} sx={{ p: 2 }} />
            {/* <Grid item xs={2} bgcolor={'chocolate'} height={500} px={1}>
          <CheckboxList/>

          </Grid> */}




          </Grid>

        </Grid>


      </Container>


    </>
  )
}

export default ProductsList;