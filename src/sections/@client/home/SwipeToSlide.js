import React from "react";
import Slider from "react-slick";
// @mui
import { Box, Card, Link, Typography, Stack, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';

import PRODUCTS from '../../../_mock/products-clone';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

const textStyle = {
    height: '50px',
    overflow: 'hidden',
    display: 'block',
    textOverflow: 'ellipsis',
};
// ----------------------------------------------------------------------


const customArrowStyles = {
    position: "absolute",
    zIndex: 1,
};

const CustomNextArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, right: "-32px" }}
        aria-label="Next"
    />
);

const CustomPrevArrow = (props) => (
    <Button
        {...props}
        style={{ ...customArrowStyles, left: "-32px" }}
        aria-label="Previous"
    />
);

function SwipeToSlide() {

    const settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <>
            <Slider {...settings} style={{ margin: '0 10px'}}>

                {PRODUCTS.slice(0, 15).map((product) => (
                    <div>
                        <Card key={product.id} sx={{ m: '0 10px' }}>
                            <Box sx={{ pt: '100%', position: 'relative' }}>
                                {product.status && (
                                    <Label
                                        variant="filled"
                                        color={'primary'}
                                        sx={{
                                            zIndex: 9,
                                            top: 16,
                                            right: 16,
                                            borderRadius: 20,
                                            position: 'absolute',
                                        }}
                                    >
                                        {product.status}
                                    </Label>
                                )}
                                <StyledProductImg alt={product.name} src={product.cover} />
                            </Box>

                            <Stack spacing={2} sx={{ p: '24px 16px' }} >

                                <Link color="inherit" underline="hover">
                                    <Typography variant="subtitle1" style={textStyle}  >
                                        {product.name}
                                    </Typography>
                                </Link>

                                <Stack direction="row" alignItems="center">
                                    <Typography variant="body1"
                                        sx={{
                                            color: 'primary.main',
                                        }}>
                                        {fCurrency(product.price)}đ

                                        <Typography
                                            component="span"
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                            }}
                                        >
                                            &nbsp;/&nbsp;{product.unit}
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Card>
                    </div>
                ))}
            </Slider>
        </>
    );
}
export default SwipeToSlide;