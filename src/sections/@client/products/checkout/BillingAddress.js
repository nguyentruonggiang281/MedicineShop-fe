import React from 'react'
// import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, Stack, Typography, Button } from '@mui/material'
import Iconify from '../../../../components/iconify/Iconify'

function BillingAddress() {
    return (
        <Card>
            <CardHeader title={
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1}>
                    <Typography variant='h6'> Billing Address </Typography>
                    <Button sx={{ color: '#00ab55' }}  >
                        <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                        Edit
                    </Button>
                </Stack>
            } />

            <CardContent>
                <Stack >
                    <Stack direction={'row'} spacing={1}>
                        <Typography variant='subtitle2' gutterBottom> Nguyễn Trường Giang </Typography>
                        <Typography variant='body2' color="text.secondary" >  (Home)</Typography>
                    </Stack>
                    <Typography variant='body2' gutterBottom>  19034 Verna Unions Apt. 164 - Honolulu, RI / 87535</Typography>
                    <Typography variant='body2' color="text.secondary" >  365-374-4961</Typography>

                </Stack>
            </CardContent>
        </Card>
    )
}

export default BillingAddress
