import React from "react";
import { Paper,Autocomplete,Typography, Grid, TextField, Button, Stack, FormControl, InputLabel, Select, FormControlLabel, OutlinedInput, InputAdornment, Checkbox } from "@mui/material";

import { DatePicker, Switch } from 'antd';
import { UpLoadImg } from './UpLoadImg';


const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const dateFormat = 'DD/MM/YYYY';

const top100Films = [
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];


export default function ProductForm() {


  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>

          <Paper elevation={0} variant="outlined" sx={{ borderRadius: 2, p: 3 }} >
            <Stack spacing={3}>
              <TextField fullWidth placeholder="Vd: Paracetamol" label="Product Name" variant="outlined" />
              {/* quy cách (vd: 1 Tuýp x 20 Viên)  */}
              <TextField fullWidth placeholder="Vd: 1 type x 20 Capsule" label="Specifications" variant="outlined" />
              {/* Xuất xứ */}
              <TextField fullWidth placeholder="Vd: Việt Nam" label="Origin" variant="outlined" />
              {/* Công ty sản xuất */}
              <TextField fullWidth placeholder="Vd: Nestlé" label="Producer" variant="outlined" />
              {/* công dụng */}
              <TextField
                fullWidth
                multiline
                label="Uses"
                variant="outlined"
              />

            </Stack>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Description</Typography>
           

            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Images</Typography>

            <UpLoadImg />

          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Paper elevation={0} variant="outlined" sx={{ p: 3 }} >
              <Stack spacing={2}>
                {/* đơn vị bán */}
                <FormControl>
                  <Typography variant="subtitle2" >Selling unit</Typography>
                  <Grid container spacing={2} columns={10} mt="1">
                    <Grid item xs={5}>
                      <FormControlLabel control={<Checkbox />} label="Unit" value="cái" />
                      <FormControlLabel control={<Checkbox />} label="Box" value="hộp" />
                      <FormControlLabel control={<Checkbox />} label="Capsule" value="viên" />
                    </Grid>
                    <Grid item xs={5}>

                      <FormControlLabel control={<Checkbox />} label="Bottle" value="chai" />
                      <FormControlLabel control={<Checkbox />} label="Pack" value="gói" />

                    </Grid>
                  </Grid>
                </FormControl>
                {/* Ngày sản xuất - hạn sử dụng */}

                <FormControl fullWidth>
                  <Typography variant="subtitle2" >MFG - EXP</Typography>

                  <DatePicker.RangePicker
                    style={{
                      width: "100%",
                      height: "56px"
                    }}
                    format={dateFormat} />
                </FormControl>

                {/* tag những mục trên menu */}
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tags"
                    />
                  )}
                />
                {/* danh mục */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                    <option aria-label="None" value="" />
                    <optgroup label="Category 1">
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                    </optgroup>
                    <optgroup label="Category 2">
                      <option value={3}>Option 3</option>
                      <option value={4}>Option 4</option>
                    </optgroup>
                  </Select>
                </FormControl>
              </Stack>

            </Paper>
            <Paper elevation={0} variant="outlined" sx={{ p: 3 }} >
              <Stack spacing={2}>
                {/* giá nhập */}
                <FormControl fullWidth >
                  <InputLabel htmlFor="outlined-adornment-amount">Regular Price</InputLabel>
                  <OutlinedInput
                    startAdornment={<InputAdornment position="start">VNĐ</InputAdornment>}
                    label="Regular Price"
                  />
                </FormControl>
                {/* giá bán */}
                <FormControl fullWidth >
                  <InputLabel htmlFor="outlined-adornment-amount">Sale Price</InputLabel>
                  <OutlinedInput

                    startAdornment={<InputAdornment position="start">VNĐ</InputAdornment>}
                    label="Sale Price"

                  />

                </FormControl>
                <FormControlLabel control={<Switch onChange={onChange} size="small" style={{ width: "30px", marginRight: "10px" }} />} label="Price includes taxes" />


              </Stack>

            </Paper>
            <Button fullWidth size='large' variant="contained" color="success" type="submit">
              Create Product
            </Button>
          </Stack>
        </Grid>

      </Grid>
    </>
  );
}