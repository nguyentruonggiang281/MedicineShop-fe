import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Grid,
  Stack,
  Paper,
  Button,
  Divider,
  ListItem,
  Container,
  Typography
} from '@mui/material';


import { SearchForm, SwipeToSlide, SimpleSlider, ToggleButtonFilter } from '../../sections/@client/home';
import { ProductList } from '../../sections/@client/products';
import PRODUCTS from '../../_mock/products-clone';
import Iconify from '../../components/iconify';

// hình và nội dung của phần hướng dẫn mua thuốc  
const GUIDE = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
];


// hình và nội dung của phần hướng dẫn mua thuốc  
const FEATURED_CATEGORY = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
];


export default function Home() {

  return (
    <>
      {/* ------------------------------------------------------------------------------- */}
      <Helmet>
        <title>Medicine Shop - Hệ thống nhà thuốc đạt chuẩn đặc cầu</title>
      </Helmet>
      {/* ------------------------------------------------------------------------------- */}
      <Container >
        <Stack spacing={4}>

          {/* slider và thanh search */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack direction="column" spacing={{ xs: 11, sm: 18, md: 27, lg: 37, xl: 45 }}>
            <SimpleSlider />
            <SearchForm />
          </Stack>

          {/* hướng dẫn mua thuốc */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack spacing={2}>
            <Typography variant='h3' align='center'> Mua Thuốc Dễ Dàng Tại Medicine Shop</Typography>

            <Stack direction="row"
              divider={<Divider orientation="vertical" flexItem />}>
              {GUIDE.map((data, index) => {
                return (
                  <ListItem key={index}>
                    <Stack direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width={"100%"}>
                      <img
                        src={data.img}
                        srcSet={data.img}
                        alt={data.title}
                        loading="lazy"
                        width={'64px'}
                      />
                      <Typography mt={2} variant='subtitle1'>{data.title}</Typography>
                      <Typography variant='body1'>{data.content}</Typography>
                    </Stack>
                  </ListItem>
                );
              })}

            </Stack>
            <Box display={"flex"} justifyContent={"center"}>
              <Button variant="contained" sx={{ width: "300px", borderRadius: '18px' }}>MUA THUỐC NGAY</Button>
            </Box>
          </Stack>

          {/* danh mục nổi bật */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack spacing={1}>
            <Typography variant='h3' align='center'>Danh Mục Nổi Bật</Typography>

            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              {FEATURED_CATEGORY.map((data, index) => {
                return (
                  <Grid item xs={2} sm={4} md={2} key={index} >
                    <ListItem key={index} >
                      <Paper direction="column"
                        justifyContent="center"
                        alignItems="center"
                        width={"100%"}
                        height={"100%"}
                        sx={{ background: "#f0f000" }} >

                        <img
                          src={data.img}
                          srcSet={data.img}
                          alt={data.title}
                          loading="lazy"
                          width={'64px'}
                        />
                        <Typography mt={2} variant='subtitle1'>{data.title}</Typography>
                        <Typography variant='body1'>{data.content}</Typography>
                      </Paper>
                    </ListItem>
                  </Grid>
                );
              })}
            </Grid>

          </Stack>

          {/* Sản Phẩm Nổi Bật Hôm Nay */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack sx={{ background: "#A7CCE5", pt: 2, pb: 2, borderRadius: 2 }} >
            <Typography variant='h4' mb={2}>
              <Iconify icon="ri:shield-star-fill" sx={{ pt: 0.2, mr: 1.5, ml: 1.5, color: '#fff', background: 'blue', borderRadius: "50%" }} /> Sản Phẩm Nổi Bật Hôm Nay</Typography>
            <SwipeToSlide />
          </Stack>

          {/* Bán Chạy Nhất */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack>
            <Typography variant='h4' mb={2} >
              <Iconify icon="mdi:fire" sx={{ mr: 1.5, color: '#fff', background: 'red', borderRadius: "50%" }} /> Bán Chạy Nhất</Typography>
            <ProductList products={PRODUCTS} limit={8} />
          </Stack>




          {/* Sản Phẩm Theo Đối Tượng */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2} mb={2}
            >
              <Typography variant='h4' >
                <Iconify icon="mdi:person-multiple" sx={{ mr: 1.5, color: '#fff', background: 'blue', borderRadius: "50%" }} /> Sản Phẩm Theo Đối Tượng
              </Typography>

              <ToggleButtonFilter />

            </Stack>
            <ProductList products={PRODUCTS} limit={8} />
          </Stack>

          {/* Gợi Ý Hôm Nay */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack sx={{borderRadius: "16px" ,border: "1px solid #8c8c8d"}}>
            
            <Typography variant='h4' mt={2} ml={2}>
              <Iconify icon="mdi:brightness-percent" sx={{ p: 0.1, mr: 1.5, color: '#fff', background: 'blue', borderRadius: "50%" }} />
              Gợi Ý Hôm Nay</Typography>
              <ProductList products={PRODUCTS} limit={8} sx={{p:2}}/>
          </Stack>

        </Stack>
      </Container>
    </>
  )
} 
