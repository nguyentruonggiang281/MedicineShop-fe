import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Button, Container, Divider, Grid, ListItem, Paper, Stack, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import SimpleSlider from '../../sections/@client/home/SimpleSliders';
import { SearchForm } from '../../sections/@client/home';
import { ProductList } from '../../sections/@client/products';
import PRODUCTS from '../../_mock/products-clone';

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

          {/* Bán Chạy Nhất */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack>
            <Typography variant='h4' pb={2} >
              <LocalFireDepartmentIcon sx={{ fontSize: 24, mr: 1, pt: 0.5, color: '#fff', background: 'red', borderRadius: "50%" }} /> Bán Chạy Nhất</Typography>
            <ProductList products={PRODUCTS} limit={8} />
          </Stack>
          
          {/* Bán Chạy Nhất */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack>
            <Typography variant='h4' pb={2} >
              <LocalFireDepartmentIcon sx={{ fontSize: 24, mr: 1, pt: 0.5, color: '#fff', background: 'red', borderRadius: "50%" }} /> Bán Chạy Nhất</Typography>
            <ProductList products={PRODUCTS} limit={8} />
          </Stack>
          <Stack>
            <Typography variant='h4' pb={2} >
              <LocalFireDepartmentIcon sx={{ fontSize: 24, mr: 1, pt: 0.5, color: '#fff', background: 'red', borderRadius: "50%" }} /> Bán Chạy Nhất</Typography>
            <ProductList products={PRODUCTS} limit={8} />
          </Stack>
        </Stack>
      </Container>
    </>
  )
} 
