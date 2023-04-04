import React, { useState } from 'react';
import {  ToggleButton, ToggleButtonGroup,Typography } from '@mui/material';

function ToggleButtonFilter() {
  const [selectedButton, setSelectedButton] = useState('Tre-em');

  const handleButtonChange = (event, newSelectedButton) => {
    setSelectedButton(newSelectedButton);
  };

  return (
    <ToggleButtonGroup
    color="primary"
    exclusive
    value={selectedButton}
    onChange={handleButtonChange}
    aria-label="text alignment"
    size="small"
  >
    <Typography variant='subtitle1' sx={{ mr: 3, mt: 0.8, color: "primary" }}>Lọc Theo: </Typography>
    <ToggleButton defaultChecked={true} value="Tre-em" aria-label="left aligned">
      Trẻ em
    </ToggleButton>
    <ToggleButton value="Nguoi-cao-tuoi" aria-label="centered">Người cao tuổi</ToggleButton>
    <ToggleButton value="Phu-nu-cho-con-bu" aria-label="right aligned">Phụ nữ cho con bú</ToggleButton>
  </ToggleButtonGroup>

  );
}
export default ToggleButtonFilter;
