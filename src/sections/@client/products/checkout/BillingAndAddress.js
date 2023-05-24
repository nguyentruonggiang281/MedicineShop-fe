import React from 'react';
import { useState } from 'react';
import {
    Button,
    Container,
     Grid, Typography,
    Card, CardContent, Stack,
    MenuItem, Popover, IconButton
  } from '@mui/material';
  import Iconify from '../../../../components/iconify/Iconify';
  import PropTypes from 'prop-types'
  import { StyledButtonGreenOutlined, StyledButtonGreenText } from '../../../../components/custom/CustomButton';
 
  import Label from '../../../../components/label/Label';
  import OrderSummary from './OrderSummary';
import AddressForm from './AddressForm';



BillingAndAddress.propTypes = {
    handleBack: PropTypes.func,
    handleNext: PropTypes.func,
    activeStep: PropTypes.number,
  }
  
  function BillingAndAddress({ handleBack, handleNext, activeStep }) {
    const [open, setOpen] = useState(null);
  
    const handleOpenMenu = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setOpen(null);
    };
  
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  

    return (
      <>
        <Container >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
  
                  <Stack spacing={1}  >
                    <Stack direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack direction={'row'} spacing={1}>
                        <Typography variant='subtitle1'> Jayvion Simon </Typography>
                        <Typography color={'text.secondary'}>(Home)</Typography>
                        <Label color={'info'}>Default</Label>
                      </Stack>
  
                      <IconButton size="small" sx={{ height: 26, width: 26 }} color="inherit" onClick={handleOpenMenu}>
                        <Iconify icon={'eva:more-vertical-fill'} />
                      </IconButton>
                    </Stack>
                    <Typography variant='body2'>
                      19034 Verna Unions Apt. 164 - Honolulu, RI / 87535
                    </Typography>
  
                    <Grid container alignItems={'center'}>
                      <Grid item xs={12} md={9}>
                        <Typography variant='body2' alignItems={'center'} color={'text.secondary'} noWrap>
                          365-374-4961
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        {/* --------------------------------------- BUTTON --------------------------------------------------- */}
                        <StyledButtonGreenOutlined sx={{ mt: { xs: 2, md: 0 }, padding: '3px 9px' }} size='small' onClick={handleNext}>Chọn địa chỉ này</StyledButtonGreenOutlined>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
  
  
              </Card>
  
              {/* --------------------------------------- BUTTON --------------------------------------------------- */}
              <Stack direction={'row'} mt={3} alignItems='center' justifyContent='space-between' ju>
                <Button sx={{ color: '#000' }} onClick={handleBack}>
                  <Iconify icon='ic:outline-keyboard-arrow-left' mr={1} />Back
                </Button>
  
                <StyledButtonGreenText size='small' onClick={handleOpenDialog}>
                  <Iconify icon='ic:sharp-plus' sx={{ height: 16, width: 16 }} />
                  &nbsp; Thêm địa chỉ mới &nbsp;
                </StyledButtonGreenText>
              </Stack>
            </Grid>
  
  
            {/* Order Summary */}
            <Grid item xs={12} md={4} >
              <OrderSummary activeStep={activeStep} />
            </Grid>
  
          </Grid>
        </Container>
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
          transformOrigin={{ vertical: 'center', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 1,
              width: 140,
              '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <MenuItem>
            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
            Edit
          </MenuItem>
  
          <MenuItem sx={{ color: 'error.main' }}>
            <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
        <AddressForm open={openDialog} onClose={handleCloseDialog}/>
      </>
    );
  };
export default BillingAndAddress;  