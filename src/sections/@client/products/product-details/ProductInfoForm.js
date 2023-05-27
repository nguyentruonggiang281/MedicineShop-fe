import React from 'react';
import { useState } from 'react';
import { Typography, Grid, Stack, styled, ListItem, Divider, ListItemText, List } from '@mui/material';
import PropTypes from 'prop-types';
import Quantity from './Quantity';
import OptionList from './OptionList';


const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  border: `1px solid ${selected ? theme.palette.primary.main : 'gray'}`,
  borderRadius: 5,
  width: '30%',
  padding: '0 22px 0 15px',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  color: selected ? 'text.secondary' : 'inherit',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.main : '#f5f5f5',
  },
  '& .MuiListItemText-primary': {
    fontWeight: selected ? 'bold' : 'normal',

  },
}));

const StyledTick = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  borderRadius: '0 10% 0 100%',
  borderBottom: `28px solid transparent`,
  borderRight: `28px solid ${theme.palette.primary.main}`,
  position: 'absolute',

  transformOrigin: '100% 0%',
  "&::before": {
    content: '""',
    display: 'block',
    width: 5,
    height: 10,
    borderBottom: `2px solid ${theme.palette.background.default}`,
    borderRight: `2px solid ${theme.palette.background.default}`,
    transform: 'rotate(45deg)',
    transformOrigin: '180% 260%',
  },
}));

ProductInfoForm.propTypes = {
  product: PropTypes.object,
}


/**
 * This function returns a form containing information about a product.
 * @param {object} product - The product for which to display information.
 * @returns {JSX.Element} - The JSX element containing the product information.
 */
function ProductInfoForm({ product }) {

  const [selectedIndex, setSelectedIndex] = useState(product?.units.length - 1);
const[price, setPrice] = useState(product?.price);
const[unit, setUnit] = useState(product?.unit);

    const handleListItemClick = (event, selected,index ,unit) => {
        setSelectedIndex(selected);
        setPrice(product?.units[index].specifications * product?.price);
        setUnit(unit);
        //
        // console.log("setSelectedIndex----->",  );
    };
  return (
    <Grid container spacing={1}>

      {/* Brand */}
      <Grid container spacing={0}>
        {product?.brand !== "" ? (
          <Grid item xs={12} >
            <Stack direction={'row'} spacing={1}>
              <Typography variant="subtitle1">Thương hiệu: </Typography>
              <Typography variant="body1">{product?.brand}</Typography>
            </Stack>
          </Grid>
        ) : null
        }

        {/* Product name */}
        <Grid item xs={12}>
          <Typography color={'#022864'} variant="h4">{product?.name}</Typography>
        </Grid>
      </Grid>

      {/* Price */}
      <Grid item xs={12} sx={{ borderTop: '1px dashed lightgrey' }}>
        <Stack direction={'row'} alignItems="center" spacing={1}>
          <Typography variant="h3">{price}đ</Typography>
          <Typography pt={1} color={'text.secondary'} variant="h6">/&nbsp;{unit}</Typography>
        </Stack>
      </Grid>

      {/* Category */}
      <Grid item xs={12} >
        <Stack direction={'row'} spacing={1}>
          <Typography variant="subtitle1">Danh mục: </Typography>
          <Typography variant="body1">
            {product?.category}
          </Typography>
        </Stack>
      </Grid>

      {product?.dosageForm !== "" ? (
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Dạng bào chế:</Typography>
            <Typography variant="body1">{product?.dosageForm}</Typography>
          </Stack>
        </Grid>
      ) : null
      }


      {/* Packaging */}
      {product?.specifications !== "" ? (
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Quy cách:</Typography>
            <Typography variant="body1">{product?.specifications}</Typography>
          </Stack>
        </Grid>

      ) : null}


      {/* Health benefits */}

      {/* Country of origin */}
      {product?.origin !== "" ? (
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Xuất xứ thương hiệu:</Typography>
            <Typography variant="body1">{product?.origin} </Typography>
          </Stack>
        </Grid>
      ) : null
      }

      {/* Manufacturer */}
      {product?.manufacturer !== "" ? (
        <Grid item xs={12} >
          <Stack direction={'row'} spacing={1}>
            <Typography variant="subtitle1">Nhà sản xuất:</Typography>
            <Typography variant="body1">{product?.manufacturer} </Typography>
          </Stack>
        </Grid>
      ) : null}


      {/* short_description */}
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Công dụng:
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: product?.shortDescription }}>
          </Typography>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ borderStyle: 'dashed' }} />
      </Grid>


      {/* option lựa đơn vị bán, số lượng */}


      {/* đơn vị bán */}
      <Grid item xs={12} md={3} >
        <Typography variant='subtitle1'>Đơn vị bán</Typography>
         </Grid>
      <Grid item xs={12} md={9} >
        {/* <OptionList data={product?.units} /> */}

        <List>
            <Stack direction="row" justifyContent="flex-end"
                alignItems="center"
                spacing={2}>

                {product?.units?.map((option) => (

                    <StyledListItem
                        key={option.rank}
                        button
                        selected={selectedIndex === option.rank}
                        onClick={(event) => handleListItemClick(event, option.rank, product?.units.length - 1 - option.rank, option.name)}
                    >

                        <ListItemText primary={option.name} />
                        {selectedIndex === option.rank && <StyledTick />}

                    </StyledListItem>

                ))}</Stack>
        </List>
      </Grid>


      {/* Số lượng */}
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant='subtitle1'> Chọn số lượng </Typography>
          <Stack>
            <Quantity />
            <Typography variant='caption' pt={'2px'} textAlign={'right'}> Có sẵn : {product?.quantity} </Typography>
          </Stack>
        </Stack>
      </Grid>

    </Grid>
  );
};


export default ProductInfoForm;
