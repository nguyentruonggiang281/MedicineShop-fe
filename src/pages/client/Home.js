import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Grid,
  Stack,
  Button,
  Divider,
  ListItem,
  Container,
  Typography,
  Card,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { SearchForm, SwipeToSlide, SimpleSlider, ListChip, GlassCardComponent } from '../../sections/@client/home';
import { ProductList } from '../../sections/@client/products';
import PRODUCTS from '../../_mock/products-clone';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar/Scrollbar';
import POSTS from '../../_mock/blog';
import { BlogPostCard } from '../../sections/@dashboard/blog';


// hình và nội dung của phần hướng dẫn mua thuốc  
const GUIDE = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
];


// hình và nội dung của phần hướng dẫn mua thuốc  
const FEATURED_CATEGORY = [
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/sinh-ly-noi-tiet-to.png", title: "Sinh lý - Nội tiết tố", quantity: '120' },
  { img: "https://nhathuoclongchau.com.vn/images/category/20220624120650-9722.png", title: "Sức khoẻ tim mạch", quantity: '53' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/ho-tro-tieu-hoa.png", title: "Hỗ trợ tiêu hóa", quantity: '87' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/than-kinh-nao.png", title: "Thần kinh não", quantity: '120' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/cai-thien-tang-cuong-chuc-nang.png", title: "Cải thiện tăng cường chức năng", quantity: '58' },
  { img: "https://nhathuoclongchau.com.vn/images/category/20220624120646-2097.png", title: "Chăm sóc cơ thể", quantity: '66' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/cham-soc-da-mat.png", title: "Chăm sóc da mặt", quantity: '120' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/cham-soc-toc-da-dau.png", title: "Chăm sóc tóc - da đầu ", quantity: '90' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/ho-tro-tinh-duc.png", title: "Hỗ trợ tình dục", quantity: '69' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/cham-soc-rang-mieng.png", title: "Chăm sóc răng miệng", quantity: '120' },
  { img: "https://nhathuoclongchau.com.vn/upload/images/filtercate/ve-sinh-ca-nhan.png", title: "Vệ sinh cá nhân", quantity: '97' },
  { img: "https://nhathuoclongchau.com.vn/images/category/20220624120605-4612.png", title: "Dụng cụ y tế", quantity: '75' },
];

const END = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/drug-double.svg", title: "THUỐC CHÍNH HÃNG", content: 'đa dạng và chuyên sâu' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-reload-vector.svg", title: "ĐỔI TRẢ TRONG 30 NGÀY", content: 'kể từ ngày mua hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-guarantee-vector.svg", title: "CAM KẾT 100%", content: 'chất lượng sản phẩm' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-shipping.svg", title: "MIỄN PHÍ VẬN CHUYỂN", content: 'theo chính sách giao hàng' },
];
const dataTitleFilter = [
  { title: 'MẸ VÀ BÉ', href: '/products', img: 'https://nhathuoclongchau.com.vn/upload/me-be.png' },
  { title: 'NGƯỜI CAO TUỔI', href: '#', img: 'https://nhathuoclongchau.com.vn/upload/nguoicaotuoi.png' },
  { title: 'TRẺ EM', href: '#', img: 'https://nhathuoclongchau.com.vn/upload/treem.png' },
]

const filterByChip = [
  { key: 0, label: 'Trẻ em' },
  { key: 1, label: 'Người cho con bú ' },
  { key: 2, label: 'Phụ nữ cao tuổi' },
];


const dataTitleSuggestions = [
  { title: 'Khả năng trào ngược dạ dày', href: '/products', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach1.png' },
  { title: 'Nguy cơ phụ thuộc bình xịt cắt cơn', href: '#', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach2.png' },
  { title: 'Sàng lọc nguy cơ mắc bệnh tim mạch', href: '#', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach3.png' },
]

const SuggestionsChip = [
  { key: 0, label: 'Tìm kiếm nhiều' },
  { key: 1, label: 'Mua nhiều' },
  { key: 2, label: 'Sữa cho cả nhà' },
  { key: 3, label: 'Da sáng dáng xinh' },
  { key: 4, label: 'Chồng khỏe vợ vui' },
  { key: 5, label: 'Phòng sốt xuất huyết' },
  { key: 6, label: 'Phòng bệnh mùa hè' },
];


const StyledProductImg = styled('img')({
  top: 0,
  width: '100px',
  height: '100px',
  position: 'absolute',
});
const textStyle = {
  height: '50px',
  overflow: 'hidden',
  display: 'block',
  textOverflow: 'ellipsis',

};

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
                  <Grid item xs={2} sm={4} md={2} p={2} key={index} >
                    <Card>
                      <Box sx={{ pt: '50%', position: 'relative', display: 'flex', justifyContent: 'center' }}>

                        <StyledProductImg alt={data.title} src={data.img} />
                      </Box>

                      <Stack sx={{ p: 2 }} >
                        <Typography variant="subtitle1" textAlign={'center'} style={textStyle}  >
                          {data.title}
                        </Typography>
                        <Typography textAlign={'center'} variant="body1" color={'text.secondary'}>{data.quantity}&nbsp;Sản phẩm
                        </Typography>

                      </Stack>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>

          </Stack>

          {/* Sản Phẩm Nổi Bật Hôm Nay */}

          {/* ------------------------------------------------------------------------------- */}
          <Stack sx={{ background: "#e0edfe", pt: 2, pb: 2, borderRadius: 2 }} >
            <Typography variant='h4' mb={2}>
              <Iconify icon="ri:shield-star-fill" sx={{ pt: 0.2, mr: 1.5, ml: 1.5, color: '#fff', background: '#1565c0', borderRadius: "50%" }} /> Sản Phẩm Nổi Bật Hôm Nay</Typography>
            <SwipeToSlide product={PRODUCTS} limit={15} />
          </Stack>

          {/* Bán Chạy Nhất */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack>
            <Typography variant='h4' mb={2} >
              <Iconify icon="mdi:fire" sx={{ mr: 1.5, color: '#fff', background: 'red', borderRadius: "50%" }} /> Bán Chạy Nhất</Typography>
            <ProductList products={PRODUCTS} limit={10} />
          </Stack>


          {/* Sản Phẩm Theo Đối Tượng */}

          {/* ------------------------------------------------------------------------------- */}
          <GlassCardComponent dataTitle={dataTitleFilter} title='BẢO VỆ' content='Sức khoẻ người thân' />
          <Stack>
 <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2} mb={2}
            >
              <Typography variant='h4' >
                <Iconify icon="mdi:person-multiple" sx={{ mr: 1, color: '#fff', background: '#1565c0', borderRadius: "50%" }} /> Sản Phẩm Theo Đối Tượng
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant='subtitle1' sx={{ mr: 3, color: "primary" }}>Lọc Theo: </Typography>
                <ListChip chipData={filterByChip} size="small" />
              </Stack>
            </Stack>
            <ProductList products={PRODUCTS} limit={10} />
          </Stack>

          {/* Gợi Ý Hôm Nay */}
          {/* ------------------------------------------------------------------------------- */}
          <Stack sx={{ borderRadius: "16px", border: "1px solid lightgrey" }}>

            <Typography variant='h4' mt={2} ml={2}>
              <Iconify icon="mdi:brightness-percent" sx={{ p: 0.1, mr: 1.5, color: '#fff', background: '#1565c0', borderRadius: "50%" }} />
              Gợi Ý Hôm Nay</Typography>
            <Scrollbar >
              <Stack direction="row" spacing={2} sx={{ p: 2 }} >
                <ListChip chipData={SuggestionsChip} size="small" />
              </Stack>
            </Scrollbar>
            <ProductList products={PRODUCTS} limit={10} sx={{ p: 2 }} />
          </Stack>

          <GlassCardComponent dataTitle={dataTitleSuggestions} title='Kiểm tra sức khoẻ' content='Dựa trên đánh giá từ các chuyên gia' />

          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"

              spacing={2} m={2}
            >
              <Typography variant='h4' >
                <Iconify icon="fluent-mdl2:page-list-mirrored-solid" sx={{ p: 0.1, mr: 1.5, color: '#fff', background: '#1565c0', borderRadius: "50%" }} />
                Góc Sức Khỏe
              </Typography>
              <Link underline="hover" href='/blog'>
                <Typography variant="subtitle1"  >
                  Xem Tất Cả
                </Typography>
              </Link>
            </Stack>
            <Grid container spacing={3}>
              {POSTS.slice(0, 7).map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </Grid>


          </Stack>


          <Stack sx={{ borderRadius: "16px", border: "1px solid lightgrey" }}>

            <Typography variant='h4' mt={2} ml={2}>
              <Iconify icon="ph:chart-line-up-bold" sx={{ p: 0.1, mr: 1.5, color: '#fff', background: '#1565c0', borderRadius: "50%" }} />
              Tìm Kiếm Hàng Đầu
            </Typography>
            <Stack mx={2}>
              <Scrollbar >
                <Stack direction="row" spacing={2} py={2}>
                  <ListChip chipData={SuggestionsChip} sx={{ fontSize: 16 }} />
                </Stack>
              </Scrollbar></Stack>
          </Stack>

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
           
          >
            {END.map((data, index) => {
              return (
                <ListItem key={index}>
                  <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <img
                      src={data.img}
                      srcSet={data.img}
                      alt={data.title}
                      loading="lazy"
                     
                    />
                    <Stack pl={2}>
                      <Typography variant='subtitle1'>{data.title}</Typography>
                      <Typography color="text.secondary" variant='body1'>{data.content}</Typography>
                    </Stack>
                  </Stack>
                </ListItem>
              );
            })}

          </Stack>

        </Stack>
      </Container>
    </>
  )
} 
