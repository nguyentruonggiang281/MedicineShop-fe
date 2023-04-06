import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Stack,
  Button,
  Divider,
  ListItem,
  Container,
  Typography,
} from '@mui/material';
// sections
import { SearchForm, FeaturedSlide, SimpleSlider, Bestseller, ProductsByTarget, Suggestions, BlogReview, FeaturedCategory, TopSearch } from '../../sections/@client/home';
// components
import { GlassCardComponent } from '../../components/glassmorphism-card';
// _mock
import POSTS from '../../_mock/blog';
import PRODUCTS from '../../_mock/products-clone';

// hình và nội dung của phần hướng dẫn mua thuốc  
const GUIDE = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/chuptoathuoc.png", title: "CHỤP TOA THUỐC", content: 'đơn giản & nhanh chóng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/info-ct.png", title: "NHẬP THÔNG TIN LIÊN LẠC", content: 'để được tư vấn đặt hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/banner-html/home/duoc-sy.png", title: "NHẬN BÁO GIÁ TỪ DƯỢC SỸ", content: 'kèm theo tư vấn miễn phí' },
];
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TopSearchChip = [
  { key: 0, label: 'Tìm kiếm nhiều', href: '#' },
  { key: 1, label: 'Mua nhiều', href: '#' },
  { key: 2, label: 'Sữa cho cả nhà', href: '#' },
  { key: 3, label: 'Da sáng dáng xinh', href: '#' },
  { key: 4, label: 'Chồng khỏe vợ vui', href: '#' },
  { key: 5, label: 'Phòng sốt xuất huyết', href: '#' },
  { key: 6, label: 'Phòng bệnh mùa hè', href: '#' },
];

const dataTitleTarget = [
  { title: 'MẸ VÀ BÉ', href: '/products', img: 'https://nhathuoclongchau.com.vn/upload/me-be.png' },
  { title: 'NGƯỜI CAO TUỔI', href: '#', img: 'https://nhathuoclongchau.com.vn/upload/nguoicaotuoi.png' },
  { title: 'TRẺ EM', href: '#', img: 'https://nhathuoclongchau.com.vn/upload/treem.png' },
]

const dataTitleHealthCheck = [
  { title: 'Khả năng trào ngược dạ dày', href: '/products', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach1.png' },
  { title: 'Nguy cơ phụ thuộc bình xịt cắt cơn', href: '#', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach2.png' },
  { title: 'Sàng lọc nguy cơ mắc bệnh tim mạch', href: '#', img: 'https://nhathuoclongchau.com.vn/frontend_v3/images/disease_survey/stomach3.png' },
]

const END = [
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/drug-double.svg", title: "THUỐC CHÍNH HÃNG", content: 'đa dạng và chuyên sâu' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-reload-vector.svg", title: "ĐỔI TRẢ TRONG 30 NGÀY", content: 'kể từ ngày mua hàng' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-guarantee-vector.svg", title: "CAM KẾT 100%", content: 'chất lượng sản phẩm' },
  { img: "https://nhathuoclongchau.com.vn/frontend_v3/images/ic-shipping.svg", title: "MIỄN PHÍ VẬN CHUYỂN", content: 'theo chính sách giao hàng' },
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
            <SearchForm chipData={TopSearchChip} />
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
          <FeaturedCategory title='Danh Mục Nổi Bật' />

          {/* Sản Phẩm Nổi Bật Hôm Nay */}
          {/* ------------------------------------------------------------------------------- */}
          <FeaturedSlide title='Sản Phẩm Nổi Bật Hôm Nay' products={PRODUCTS} limit={15} />

          {/* Bán Chạy Nhất  */}
          {/* ------------------------------------------------------------------------------- */}
          <Bestseller title='Bán Chạy Nhất' product={PRODUCTS} limit={10} />

          {/* Sản Phẩm Theo Đối Tượng */}
          {/* ------------------------------------------------------------------------------- */}
          <GlassCardComponent dataTitle={dataTitleTarget} title='BẢO VỆ' content='Sức khoẻ người thân' />
          <ProductsByTarget title='Sản Phẩm Theo Đối Tượng' product={PRODUCTS} limit={10} />


          {/* Gợi Ý Hôm Nay */}
          {/* ------------------------------------------------------------------------------- */}
          <Suggestions title='Sản Phẩm Theo Đối Tượng' product={PRODUCTS} limit={10} />

          {/* Góc Sức Khỏe */}
          {/* ------------------------------------------------------------------------------- */}
          <GlassCardComponent dataTitle={dataTitleHealthCheck} title='Kiểm tra sức khoẻ' content='Dựa trên đánh giá từ các chuyên gia' />
          <BlogReview title='Góc Sức Khỏe' blog={POSTS} limit={7} />

          {/* Tìm Kiếm Hàng Đầu */}
          {/* ------------------------------------------------------------------------------- */}
          <TopSearch title='Tìm Kiếm Hàng Đầu' chipData={TopSearchChip} />
          {/* end */}  
          {/* ------------------------------------------------------------------------------- */}
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