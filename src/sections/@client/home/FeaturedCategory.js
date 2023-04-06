// SECTIONS DANH MỤC NỔI BẬT
// ------------------------------------------------------------------------
import React from 'react'
import PropTypes from 'prop-types'
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Link, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------------------

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
  
const CustomCard = styled(Card)(() => ({
    transition: `all 0.3s ease-in-out`,
    '&:hover': {
      transform: `scale(1.07)`,
      boxShadow: `20px 20px 50px rgba(0, 0, 0, 0.6), 
                  -20px -20px 50px rgba(255, 255, 255, 0.2)`
    }
  }));
const StyledProductImg = styled('img')({
    top: 8,
    width: '100px',
    height: '100px',
    position: 'absolute',
    margin:2
  });
  const textStyle = {
    height: '50px',
    overflow: 'hidden',
    display: 'block',
    textOverflow: 'ellipsis',
    
  };
// ------------------------------------------------------------------------

function FeaturedCategory({title}) {
    return (
        <Stack spacing={1}>
            <Typography variant='h3' align='center'>{title}</Typography>

            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, md: 8 ,lg:12}}>

                {FEATURED_CATEGORY.map((data, index) => {
                    return (
                        <Grid item xs={2} sm={4} md={2} p={2} key={index} >
                            <CustomCard>
                            <Link underline='none' href='/'>
                                <Box sx={{ pt: '60%', position: 'relative', display: 'flex', justifyContent: 'center' }}>

                                    <StyledProductImg alt={data.title} src={data.img} />
                                </Box>

                                <Stack p={2}>
                                    <Typography variant="subtitle1" textAlign={'center'} color={'text.primary'} style={textStyle}  >
                                        {data.title}
                                    </Typography>
                                    <Typography textAlign={'center'} variant="body1" color={'text.secondary'}>{data.quantity}&nbsp;Sản phẩm
                                    </Typography>

                                </Stack>
                            </Link>
                            </CustomCard>
                        </Grid>
                    );
                })}
            </Grid>

        </Stack>
    )
}

FeaturedCategory.propTypes = {title: PropTypes.string}

export default FeaturedCategory
