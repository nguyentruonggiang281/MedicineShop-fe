import React from 'react';
import { Typography,  Grid, Stack } from '@mui/material';

const ProductInfoForm = () => {
  return (
    <Grid container spacing={1}>
      <Stack spacing={0}>
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Thương hiệu: </Typography>
            <Typography variant="body1">Tất Thành</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Typography color={'#022864'} variant="h4">Siro bổ phế Bối Mẫu Forte Mom And Baby Tất Thành hỗ trợ giảm ho, đau rát họng, khản tiếng (125ml)</Typography>
        </Grid>
      </Stack>

      <Grid item xs={12} sx={{ borderTop: '1px dashed lightgrey' }}>
        <Stack direction={'row'} alignItems="center" spacing={1}>
          <Typography variant="h3">200.000đ</Typography>
          <Typography pt={1} color={'text.secondary'} variant="h6">&nbsp;/&nbsp;Hộp</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Danh mục: </Typography>
          <Typography variant="body1">Tất Thành</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Dạng bào chế:</Typography>
          <Typography variant="body1">Viên nang mềm</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Quy cách:</Typography>
          <Typography variant="body1">Hộp 30 viên</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Hỗ trợ:</Typography>
          <Typography variant="body1">Hỗ trợ tim mạch</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Xuất xứ thương hiệu:</Typography>
          <Typography variant="body1">Mỹ</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Nhà sản xuất:</Typography>
          <Typography variant="body1">Apple Inc.</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        
          <Typography variant="subtitle1">Công dụng: <Typography variant="body1">Hỗ trợ cho tim mạch và sức khỏe tinh thần Hỗ trợ cho tim mạch và sức khỏe tinh thầnHỗ trợ cho tim mạch và sức khỏe tinh thần</Typography></Typography>
         
        
      </Grid>

    </Grid>
  );
};

export default ProductInfoForm;
