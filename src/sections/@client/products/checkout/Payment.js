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
import { StyledButtonGreen } from '../../../../components/custom/CustomButton';

Payment.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  activeStep: PropTypes.number,
}
function Payment({ handleBack, handleNext, activeStep}) {

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
          
        </Grid>
      </Grid>
    </Container>
  );
};
export default Payment;