import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs, Button, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import ProductSlider from '../../sections/@client/products/ProductSlider';
import { ProductImg, ProductInfoForm } from '../../sections/@client/products/product-details';
import Iconify from '../../components/iconify/Iconify';
import Quantity from '../../sections/@client/products/product-details/Quantity';
import OptionList from '../../sections/@client/products/product-details/OptionList';
import TabDescriptionAndReview from '../../sections/@client/products/product-details/LabTabs';
import { FeaturedSlide } from '../../sections/@client/home';
import PRODUCTS from '../../_mock/products-clone';


const StyledSeparator = styled('span')({
    color: '#919eab',
    fontSize: '1.5em'// tăng kích thước của ký tự separator lên 1.5 lần so với kích thước mặc định
});


const StyledButtonAdd = styled(Button)(() => ({
    color: '#000',
    width: '100%',
    height: '48px',
    backgroundColor: 'rgb(255 171 0)',
    '&:hover': {
        backgroundColor: 'rgb(183, 110, 0)',

        boxShadow: 'rgba(255, 171, 0, 0.24) 0px 8px 16px 0px'
    }
}));

const StyledButtonBuy = styled(Button)(() => ({
    color: '#fff',
    width: '100%',
    backgroundColor: 'rgb(0 171 85)',
    '&:hover': {
        backgroundColor: 'rgb(0, 123, 85)',

        boxShadow: 'rgba(0, 171, 85, 0.24) 0px 8px 16px 0px'
    }
}));
// const products = [
//     { name: '1', img: 'https://nhathuoclongchau.com.vn/images/product/2022/07/00500213-bcs-safefit-freezer-max-s52-3-cai-gel-mat-lanh-sang-khoai-6230-62c3_large.jpg' },
//     { name: '2', img: 'https://nhathuoclongchau.com.vn/images/product/2022/05/00345910-xit-hong-xuyen-tam-lien-hai-thuong-vuong-30ml-5572-6272_large.jpg' },
//     { name: '3', img: 'https://nhathuoclongchau.com.vn/images/product/2022/06/00030434-active-lung-400mg-new-nordic-2x15-5527-62af_large.jpg' },
//     { name: '4', img: 'https://nhathuoclongchau.com.vn/images/product/2022/06/00028445-dao-cao-rau-gillette-super-thin-can-vang-goi-2-cai-1139-62b4_large.jpg' },
//     { name: '5', img: 'https://nhathuoclongchau.com.vn/images/product/2022/06/00017326-sebiaclear-gel-moussant-200ml-svr-7018-62ae_large.JPG' },
//     { name: '6', img: 'https://nhathuoclongchau.com.vn/images/product/2022/06/00022782-sua-rua-mat-nghe-nano-ngua-mun-neo-cleanser-86g-1735-62ae_large.jpg' },

// ]
const options = ['Hột', 'Viên', 'Lọ sóc'];

function ProductDetails() {
    return (
        <>
            <Helmet>
                <title>Chi tiết sản phẩm</title>
            </Helmet>


            <Container>
                <Grid container spacing={3} >
                    {/* mục Trang chủ • Category • Category • Tên sản phẩm */}
                    <Grid item xs={12} mt={1} >
                        <Breadcrumbs separator={<StyledSeparator>&nbsp;•&nbsp;</StyledSeparator>} aria-label="breadcrumb" >
                            <Link underline="hover" color="text.primary" href="/home">
                                Trang chủ
                            </Link>
                            <Link underline="hover" color="text.primary" href="#">
                                Category
                            </Link>
                            <Link underline="hover" color="text.primary" href="#">
                                Category
                            </Link>
                            <Typography color="inherit" >Tên sản phẩm</Typography>
                        </Breadcrumbs>
                    </Grid>

                    {/* hình ảnh sản phẩm */}
                    <Grid item xs={12} md={6} lg={7}>
                        <ProductImg />
                    </Grid>
                    {/* thông tin sp */}
                    <Grid item xs={12} md={6} lg={5} mb={2}>

                        <Stack spacing={2} p={'16px 32px 0 16px'}>
                            {/* thông tin tên , giá ,... */}
                            <ProductInfoForm />

                            {/* option lựa đơn vị bán, số lượng */}
                            <Stack sx={{ borderTop: '1px dashed lightgrey', pt: 2 }}>

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

                            {/* Hai button thêm vào giỏ hàng và mua ngay */}
                            <Stack
                                direction="row"
                                spacing={2}
                                pt={2}
                                sx={{ borderTop: '1px dashed lightgrey' }}
                            >
                                {/* thêm vào giỏ */}
                                <StyledButtonAdd>
                                    <Iconify icon={'ic:round-add-shopping-cart'} />
                                    &nbsp;&nbsp;Add To Cart
                                </StyledButtonAdd>
                                {/* mua ngay */}
                                <StyledButtonBuy>Buy Now</StyledButtonBuy>
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
                    <Grid item xs={12} md={12} sx={{ borderTop: '1px dashed lightgrey' }}>
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

                    <Grid item xs={4} md={4}>
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
                    <Grid item xs={12} md={12}>
                        <TabDescriptionAndReview />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <FeaturedSlide title='Sản Phẩm Nổi Bật Hôm Nay' products={PRODUCTS} limit={5}/>
                    </Grid>
                </Grid>


            </Container>


        </>
    )
}

export default ProductDetails