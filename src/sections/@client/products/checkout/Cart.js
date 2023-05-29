import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  CardHeader,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  Checkbox,
  Avatar,
  IconButton,
} from '@mui/material';

import Iconify from '../../../../components/iconify/Iconify';
import PropTypes from 'prop-types'
import OrderSummary from './OrderSummary';
// components
import { StyledButtonGreen } from '../../../../components/custom/CustomButton';
import Scrollbar from '../../../../components/scrollbar/Scrollbar';
import CartListHead from './CartListHead';
import { Quantity } from '../product-details';
import SvgColor from '../../../../components/svg-color/SvgColor';
import { fetchCartItems, removeFromCart } from '../../../../redux/cart/cartSlice';




const TABLE_HEAD = [
  { id: 'price', label: 'Giá thành', alignRight: false },
  { id: 'quantity', label: 'Số lượng', alignRight: false },
  { id: 'unit', label: 'Đơn vị', alignRight: true },
  { id: '' }
];

// const productEmpty = [];

Cart.propTypes = {
  handleNext: PropTypes.func,
  activeStep: PropTypes.number,
}

function Cart({ handleNext, activeStep }) {


  // lấy id của sản phẩm trong bảng 
  // const [idRowProduct, setIdRowProduct] = useState(-1)

  //  lấy id của sản phẩm đã checked
  const [selected, setSelected] = useState([]);




  // load sản phẩm 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loading = useSelector((state) => state.cart.loading);
  const emptyCart = useSelector((state) => state.cart.emptyCart);

  const idAccount = useSelector((state) => state.auth.idAccount);


  
const handleRemoveClick = async (idCartItem) => {
  try {
    if (!!idCartItem) {
      dispatch(removeFromCart(idCartItem));
      console.log('Product deleted successfullyyyyyyyyyyyyyyyyy');
    } else {
      console.log("idCartItem is undefined",idCartItem);
    }
  } catch (error) {
    console.error('Failed to delete product:', error);
  }
};
  useEffect(() => {
   
    if (isLoggedIn) {
      dispatch(fetchCartItems(idAccount));
      // console.log("localStorageService",localStorageService.get("USER")?.id)
    } 
  }, [dispatch, isLoggedIn, idAccount]);

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // if (loading) {
  //   return (
  //   <SkeletonLoading/>
  //   )
  // }



  // const deleteProduct = async (id) => {
  //   if (idRowProduct !== -1) {
  //     await axios.delete(`http://localhost:8080/dashboard/product/${id}`);
  //     setIdRowProduct(-1);
  //   }
  //   else if (selected.length !== 0) {
  //     await axios.delete(`http://localhost:8080/dashboard/products/${selected}`);
  //   setSelected([]);
  //   }
  //   loadProducts();
  // };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = cart?.map((n) => n.cartItemId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
    console.log(selected);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    console.log(selected);
  };


  return (
    <Container >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} >
          <Card>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant='h6'>
                    Cart
                  </Typography>
                  <Typography variant='body1' color={'text.secondary'} >
                    ( {cart?.length} Item)
                  </Typography>
                </Stack>
              }
            />
            <CardContent sx={{ px: 0, pt: 3 }}>
              {emptyCart ? 
              (<div>

                  {/* if empty cart */}
                  <Stack spacing={1} alignItems={'center'} px={2} py={8}>
                    <SvgColor color={'gray'} src={`/assets/illustrations/illustration_empty_cart.svg`} sx={{ width: '320px', height: '240px', mb: 2 }} />
                    <Typography variant='h5'>
                      Cart is empty
                    </Typography>
                    <Typography color={'text.secondary'} variant='body2' >
                      Look like you have no items in your shopping cart.
                    </Typography>
                  </Stack>
                </div>
              ):(
                <Scrollbar>

                 {/* if non-empty cart */}
                  <TableContainer>
                    <Table sx={{ minWidth: '720px', width: '100%' }}>
                  
                      <CartListHead
                        headLabel={TABLE_HEAD}
                        rowCount={cart?.length}
                        numSelected={selected.length}
                        onSelectAllClick={handleSelectAllClick}
                      />
                      <TableBody>
                        {cart?.map((product, index) => {
                          const selectedProduct = selected.indexOf(product.cartItemId) !== -1;
                          return (

                            // 1 row có:
                            <TableRow hover key={index} tabIndex={-1} role="checkbox" selected={selectedProduct}>

                              {/* checkbox */}
                              <TableCell padding="checkbox">
                                <Checkbox size='small' checked={selectedProduct} onChange={(event) => handleClick(event, product.cartItemId)} />
                              </TableCell>

                              {/* hình + tên sản phẩm */}
                              <TableCell component="th" scope="row" padding="none" >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                  <Avatar
                                    alt={product.productName}
                                    src={product.asset}
                                    variant="rounded"
                                    sx={{ width: 55, height: 55 }} />

                                  <Typography
                                    variant="subtitle2"
                                    component="div"
                                    sx={{
                                      display: '-webkit-box',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      WebkitLineClamp: 3,
                                      WebkitBoxOrient: 'vertical',
                                      lineHeight: 1.2,
                                      maxHeight: '3.6em', // 3 lines * line-height of 1.2
                                    }}
                                  >
                                    {product.productName}
                                  </Typography>
                                </Stack>
                              </TableCell>


                              {/* Giá thành */}
                              <TableCell align="left">
                                {product.totalPrice}
                              </TableCell>

                              {/* Số lượng */}
                              <TableCell align="left">
                                <Quantity countNumber={product.quantity} />
                              </TableCell>

                              {/* đơn vị */}
                              <TableCell sx={{ minWidth: '80px' }} align="center">
                                {product.unit}
                              </TableCell>

                              {/*button delete product */}
                              <TableCell align="right">
                                <IconButton color="inherit" onClick={() => handleRemoveClick(product.cartItemId)}>
                                  <Iconify icon={'eva:trash-2-outline'} />
                                </IconButton>
                              </TableCell>

                            </TableRow>

                          );
                        })}
                        
                      </TableBody>


                    </Table>
                  </TableContainer>
                </Scrollbar>
              )  }

            </CardContent>
          </Card>
          {/* --------------------------------------- BUTTON --------------------------------------------------- */}

          <Button sx={{ color: '#000', mt: 3 }} href='/home'>
            <Iconify icon='ic:outline-keyboard-arrow-left' mr={1} />
            Continue Shopping
          </Button>


        </Grid>

        <Grid item xs={12} md={4} >


          {/* Order Summary  */}
          <OrderSummary activeStep={activeStep} />

          {/* --------------------------------------- BUTTON --------------------------------------------------- */}
          {/* if empty cart => button is disabled */}
          <StyledButtonGreen sx={{ py: 1.3, mt: 3 }} disabled={emptyCart} onClick={handleNext} > Check out </StyledButtonGreen>

        </Grid>
      </Grid>
    </Container >);
};
export default Cart;