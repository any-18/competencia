import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function ItemCount({initial, stock, onAdd}) {
    const[qty, setQty] = useState(initial)

    const handleAdd = () =>{
        if(qty < stock) {
            setQty(qty + 1)
        }
    }

    const handleSubstract = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }
    
    
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Camiseta Lila
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            XS - S - M - L
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="menos" onClick={handleSubstract}>
            -
          </IconButton>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {qty}
          </Typography>
          <IconButton aria-label="more" onClick={handleAdd}>
            +
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="more" onClick={() => onAdd(qty)}>
            Afregar al carrito
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="../Imgs/jpglany2.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ItemCount;