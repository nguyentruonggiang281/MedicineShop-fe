import React from 'react';
import { useState } from 'react';

import {  FormControlLabel, Grid, Radio, RadioGroup, Typography, styled } from '@mui/material';


const StyledFormControlLabel = styled(FormControlLabel)(({ theme, selected }) => ({
    transition: selected
        ? 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        : 'none',
    boxShadow: selected ? '0px 20px 40px -4px #919eab29' : 'none',
    border: '1px solid #919eab3d',
    borderRadius: '8px',
    padding: '20px 10px ',
    width:'100%',
}));

function DeliveryOptions() {
    const [deliveryOption, setDeliveryOption] = useState('standard');

    const handleChange = (event) => {
        setDeliveryOption(event.target.value);
    };

    return (
        <RadioGroup  aria-label="delivery-options" name="row-radio-buttons-group" value={deliveryOption} onChange={handleChange}>
            <Grid container pl={2}>
                <Grid item xs={12} md={6}>


                    <StyledFormControlLabel
                        value="standard"
                        control={
                            <Radio />
                        }
                        label={
                            <>
                                Standard delivery (Free)
                                <Typography variant="subtitle2" color="text.secondary">
                                    toddayyyyyyy
                                </Typography>
                            </>
                        }
                        selected={deliveryOption === 'standard'}
                    />

                </Grid>
                <Grid item xs={12} md={6} sx={{pt:{xs:2,md:0} ,pl:{sx:0,md:2}}}>
                    <StyledFormControlLabel
                        value="fast"
                        control={
                            <Radio />
                        }
                        label={
                            <>
                                Fast delivery ($2.00)
                                <Typography variant="subtitle2" color="text.secondary">
                                    toddayyyyyyy
                                </Typography>
                            </>
                        }

                        selected={deliveryOption === 'fast'}
                    />
                </Grid>
            </Grid>
        </RadioGroup>

    );
}

export default DeliveryOptions;