import React from 'react'
import { Box, Container, Skeleton, Stack } from '@mui/material'


function SkeletonLoading() {
  return (
    <Container>
      {Array.from(new Array(4)).map((item, index) => (
        <Box sx={{ pt: 0.5 }} key={index}>
          <Skeleton variant="rectangular" fullWidth height={200} />
          <Skeleton height={30} />
          <Skeleton width="60%" height={30} /> 
           <Stack spacing={2} direction="row">
            {Array.from(new Array(4)).map((item, index) => (
              <Box sx={{ width:'100%' , pt: 0.5 }} key={index}>
                <Skeleton variant="rectangular" fullWidth height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Container>
  )
}

export default SkeletonLoading