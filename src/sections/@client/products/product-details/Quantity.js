import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Iconify from 'src/components/iconify/Iconify';

const QuantityWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'fit-content',
  border: '1px solid gray',
  borderRadius: '4px',
  height: '32px',
});

const QuantityButton = styled(Button)({
  minWidth: '32px',
  height: '32px',
  padding: '0',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '&:disabled': {
    color: 'gray',

  },
});

const Quantity = () => {
  const [count, setCount] = React.useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <QuantityWrapper>
      <QuantityButton sx={{mr:1}} onClick={handleDecrement} disabled={count === 1}>
        <Iconify icon={'iconoir:minus-1'} />
      </QuantityButton>

      <span>{count}</span>

      <QuantityButton sx={{ml:1}} onClick={handleIncrement}>
        <Iconify icon={'bi:plus'} />
      </QuantityButton>
    </QuantityWrapper>
  );
};

export default Quantity;
