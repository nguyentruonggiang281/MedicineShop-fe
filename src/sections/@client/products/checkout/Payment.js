import React from 'react';
import {
  Grid,
  Card,
  Button,
  Container,
  CardHeader,
  CardContent,
} from '@mui/material';
import Iconify from '../../../../components/iconify/Iconify';
import PropTypes from 'prop-types'
import DeliveryOptions from './DeliveryOptions';
import PaymentOptions from './PaymentOptions';
import BillingAddress from './BillingAddress';
import OrderSummary from './OrderSummary';
import OrderSuccessDialog from './OrderSuccessDialog';
import { StyledButtonGreen } from '../../../../components/custom/CustomButton';

Payment.propTypes = {
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
          <OrderSuccessDialog open={open} handleClose={handleClose} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Payment;