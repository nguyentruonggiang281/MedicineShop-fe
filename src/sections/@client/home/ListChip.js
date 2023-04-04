import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material'


ListChip.propTypes = {
  chipData: PropTypes.array.isRequired
}
function ListChip({ chipData = [], ...other }) {
  const [activeChip, setActiveChip] = useState(null);

  const handleChipClick = (chipKey) => {
    setActiveChip(chipKey);
  };
  return (
    <>
      {chipData.map((data) => (
        <Chip
          key={data.key}
          label={data.label}
          clickable
          onClick={() => handleChipClick(data.key)}
          color={activeChip === data.key ? 'primary' : 'default'}
          {...other}
        />
      ))}
    </>
  );
}
export default ListChip;