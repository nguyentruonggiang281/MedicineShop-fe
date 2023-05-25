import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
// @mui
import { Breadcrumbs, Container, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material';

// sections
import { ProductImg, ProductInfoForm, Quantity, OptionList, TabDescriptionAndReview } from '../../sections/@client/products/product-details';
// import { FeaturedSlide } from '../../sections/@client/home';

// components
import Iconify from '../../components/iconify';

import { StyledSeparator } from '../../components/custom/CustomSpan';
import { StyledButtonYellow, StyledButtonGreen } from '../../components/custom/CustomButton';
import { getById } from '../../api/api';
import SkeletonLoading from '../../components/skeleton/SkeletonLoading';
import { getProductById } from '../../redux/products/ProductDetail';
import { getAllProduct } from 'src/redux/products/productList';


const options = ['Hột', 'Viên', 'Lọ sóc'];

function ProductDetails() {
const [loading, setLoading] = useState(true);
    
//   const [product, setProduct] = useState([]);

  const { id } = useParams();
  
//   const loadProducts = async () => {
//     try {
//       // Make a GET request to the products API endpoint
//       const data = await getById(`products`, id);
//   console.log(data);
//       // Set the state variable with the result of the API call
//       setProduct(data);
//     } catch (error) {
//       console.error(error);
//       // Handle the error here, e.g. show a user-friendly message
//     }
//   };
  
  
//   useEffect(() => {
//     const fetchData = async () => {
//       await loadProducts();
//     };
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
  
const dispatch = useDispatch();
const product = useSelector((state) => state.products.productDetail.product);
// const loading = useSelector((state) => state.products.productDetail.loading);
// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

useEffect(() => {
  dispatch(getProductById(id));
}, [id]);
console.log("product", product);


setTimeout(() => {
  setLoading(false);
}, 500);


if (loading) {
  return (
  <SkeletonLoading/>
  )
}

    return (
       
        <> 
            <Helmet>
                <title>Chi tiết sản phẩm</title>
            </Helmet>
 

            <Container>
                <Grid container spacing={0} >
                    {/* mục Trang chủ • Category • Category • Tên sản phẩm */}
                    <Grid item xs={12} my={1} >
                        <Breadcrumbs separator={<StyledSeparator>&nbsp;•&nbsp;</StyledSeparator>} aria-label="breadcrumb" >
                            <Link underline="hover" color="text.primary" href="/home">
                                Trang chủ
                            </Link>
                            <Link underline="hover" color="text.primary" href="#">
                                Category1
                            </Link>
                            <Link underline="hover" color="text.primary" href="#">
                                Category2
                            </Link>
                            {/* {loading ? <SkeletonLoading/> : */}
                            <Typography color="inherit" >{product.name}</Typography>
                            {/* } */}
                        </Breadcrumbs>
                    </Grid>

                    {/* hình ảnh sản phẩm */}
                    <Grid item xs={12} md={6} lg={7}>

                        <ProductImg data={product.assets}/>

                    </Grid>
                    {/* thông tin sp */}
                    <Grid item xs={12} md={6} lg={5} p={'16px 32px 16px 40px'} >

                        <Stack spacing={2} >
                            {/* thông tin tên , giá ,... */}
                            {/* <ProductInfoForm  product={product} /> */}

                            <Divider sx={{ borderStyle: 'dashed' }} />
                            {/* option lựa đơn vị bán, số lượng */}
                            <Stack>

                                {/* đơn vị bán */}
                                <Grid container alignItems="center" spacing={2} >
                                    <Grid item xs={6} md={3} >
                                        <Typography>Đơn vị bán</Typography> </Grid>
                                    <Grid item xs={6} md={9} >
                                        <OptionList options={options} />
                                    </Grid>
                                </Grid>

                                {/* Số lượng */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    pt={2}
                                >
                                    <Typography> Chọn số lượng </Typography>
                                    <Stack>
                                        <Quantity />
                                        <Typography variant='caption' pt={'2px'} textAlign={'right'}> Có sẵn : 49 </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Divider sx={{ borderStyle: 'dashed' }} />
                            {/* Hai button thêm vào giỏ hàng và mua ngay */}
                            <Stack
                                direction="row"
                                spacing={2}
                               

                            >
                                {/* thêm vào giỏ */}
                                <StyledButtonYellow>
                                    <Iconify icon={'ic:round-add-shopping-cart'} />
                                    &nbsp;&nbsp;Add To Cart
                                </StyledButtonYellow>
                                {/* mua ngay */}
                                <StyledButtonGreen>Buy Now</StyledButtonGreen>
                            </Stack>

                            {/* nút share vô tri */}
                            <Stack direction={'row'} justifyContent={'center'} spacing={0}>
                                <IconButton ><Iconify icon={'eva:facebook-fill'} /> </IconButton>
                                <IconButton ><Iconify icon={'ph:instagram-logo-fill'} /> </IconButton>
                                <IconButton ><Iconify icon={'eva:linkedin-fill'} /> </IconButton>
                                <IconButton ><Iconify icon={'eva:twitter-fill'} /> </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* cam kết (ko cần quan tâm)*/}
                    <Grid item xs={12} md={12} sx={{ borderTop: '1px dashed lightgrey' }} py={3}>
                        <Typography variant='h5' align='center' textTransform={'uppercase'}>Medicine shop cam kết</Typography>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Stack alignItems="center" spacing={1}>
                            <Stack
                                alignItems="center"
                                justifyContent='center'
                                sx={{ backgroundColor: 'rgba(0, 171, 85, 0.08)', height: '64px', width: '64px', borderRadius: '50%' }}
                            >

                                <Iconify sx={{ height: '36px', width: '36px', color: 'rgb(0 171 85)' }} icon={'uiw:time'} />
                            </Stack>
                            <Typography variant='h6'>Đổi trả trong 30 ngày
                            </Typography>
                            <Typography variant='body1' color={'text.secondary'}>
                                kể từ ngày mua hàng
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={4} md={4} >
                        <Stack alignItems="center" spacing={1}>
                            <Stack
                                alignItems="center"
                                justifyContent='center'
                                sx={{ backgroundColor: 'rgba(0, 171, 85, 0.08)', height: '64px', width: '64px', borderRadius: '50%' }}
                            >
                                <Iconify sx={{ height: '36px', width: '36px', color: 'rgb(0 171 85)' }} icon={'bi:shield-fill-check'} />
                            </Stack>
                            <Typography variant='h6'>Miễn phí 100%
                            </Typography>
                            <Typography variant='body1' color={'text.secondary'}>
                                đổi thuốc
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Stack alignItems="center" spacing={1}>
                            <Stack
                                alignItems="center"
                                justifyContent='center'
                                sx={{ backgroundColor: 'rgba(0, 171, 85, 0.08)', height: '64px', width: '64px', borderRadius: '50%' }}
                            >

                                <Iconify sx={{ height: '38px', width: '38px', color: 'rgb(0 171 85)' }} icon={'material-symbols:local-shipping-rounded'} />
                            </Stack>
                            <Typography variant='h6'>Miễn phí vận chuyển
                            </Typography>
                            <Typography variant='body1' color={'text.secondary'}>
                                theo chính sách giao hàng
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* tabs mô tả sản phẩm và quánh giá nhận xét */}
                    <Grid item xs={12} md={12} pt={3}>
                        {/* <TabDescriptionAndReview product={product} /> */}
                    </Grid>

                    {/* <Grid item xs={12} md={12} pt={3}>
                        <FeaturedSlide title='Sản Phẩm Nổi Bật Hôm Nay' products={PRODUCTS} limit={15} />
                    </Grid> */}
                </Grid>


            </Container>


        </>
    )

}

export default ProductDetails