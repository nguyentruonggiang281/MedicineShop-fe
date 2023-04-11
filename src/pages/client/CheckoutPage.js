import React from 'react';
import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  StepConnector,
  stepConnectorClasses,
  styled, Grid, Typography,
  Card, CardContent, Stack,
  CardHeader,
  MenuItem, Popover, IconButton
} from '@mui/material';
import Iconify from '../../components/iconify/Iconify';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';
import { StyledButtonGreen, StyledButtonGreenOutlined, StyledButtonGreenText } from '../../components/custom/CustomButton';
import SvgColor from '../../components/svg-color';
import Label from '../../components/label/Label';
import OrderSummary from '../../sections/@client/products/checkout/OrderSummary';
import BillingAddress from '../../sections/@client/products/checkout/BillingAddress';
import DeliveryOptions from '../../sections/@client/products/checkout/DeliveryOptions';
import PaymentOptions from '../../sections/@client/products/checkout/PaymentOptions';
import MyDialog from 'src/sections/@client/products/checkout/MyDialog';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgb(0 171 85)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgb(0 171 85)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: 'rgb(0 171 85)',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: 'rgb(0 171 85)',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Iconify icon={'solar:check-circle-bold'} sx={{ height: '28px', width: '28px' }} className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];



const steps = ['Cart', 'Billing and Address', 'Payment'];

const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0);

  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (activeStep === 2) {
      setOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {

    setActiveStep((prevActiveStep) => prevActiveStep - 1);


  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Cart handleNext={handleNext} activeStep={activeStep} />;
      case 1:
        return <BillingAndAddress handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} />;
      case 2:
        return <Payment handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleClose={handleClose} open={open}/>;
      default:
        return 'Unknown stepIndex';
    }
  };



  return (

    <>
      <Helmet>
        <title>Thanh toán</title>
      </Helmet>
      <Container>

        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />} >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>

          <Grid item xs={12}>
            {activeStep === steps.length ? (
              <Box>
                <Box>All steps completed</Box>
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            ) : (
              <Box>
                {getStepContent(activeStep)}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

Cart.propTypes = {
  handleNext: PropTypes.func,
  activeStep: PropTypes.number,
}

function Cart({ handleNext, activeStep }) {
  return (
    <Container >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant='h6'>
                    Cart
                  </Typography>
                  <Typography variant='body1' color={'text.secondary'} >
                    ( 0 Item)
                  </Typography>
                </Stack>
              }
            />
            <CardContent>



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
            </CardContent>
          </Card>
          {/* --------------------------------------- BUTTON --------------------------------------------------- */}

          <Button sx={{ color: '#000', mt: 3 }} href='/temp'>
            <Iconify icon='ic:outline-keyboard-arrow-left' mr={1} />
            Continue Shopping
          </Button>


        </Grid>

        <Grid item xs={12} md={4} >


          {/* Order Summary  */}
          <OrderSummary activeStep={activeStep} />
          {/* --------------------------------------- BUTTON --------------------------------------------------- */}
          {/* if empty cart => button is disabled */}
          <StyledButtonGreen sx={{ py: 1.3, mt: 3 }} onClick={handleNext} >Check out </StyledButtonGreen>

        </Grid>
      </Grid>
    </Container >);
};




// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

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

              <StyledButtonGreenText size='small'>
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
    </>
  );
};



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------------------------------------------------------------
BillingAndAddress.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  handleClose: PropTypes.func,
  activeStep: PropTypes.number,
  open: PropTypes.bool,
}
function Payment({ handleBack, handleNext, activeStep, open, handleClose }) {


  return (
    <Container >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title='Delivery options' />
            <CardContent>
              <DeliveryOptions />

            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }} >
            <CardHeader title='Payment Options' />
            <CardContent>
              <PaymentOptions />
            </CardContent>

          </Card>


          {/* --------------------------------------- BUTTON --------------------------------------------------- */}
          <Button sx={{ color: '#000', mt: 3 }} onClick={handleBack}>
            <Iconify icon='ic:outline-keyboard-arrow-left' mr={1} />Back
          </Button>
        </Grid>

        <Grid item xs={12} md={4} >


          <BillingAddress />

          <div style={{ marginTop: '24px' }}>
            {/* Order Summary  */}
            <OrderSummary activeStep={activeStep} />
          </div>
          {/* --------------------------------------- BUTTON --------------------------------------------------- */}
          <StyledButtonGreen sx={{ py: 1.3, mt: 3 }} onClick={handleNext} >Complete Order</StyledButtonGreen>
          <MyDialog open={open} handleClose={handleClose} />
        </Grid>
      </Grid>
    </Container>
  );
};
