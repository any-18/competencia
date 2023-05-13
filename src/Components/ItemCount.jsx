import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function ItemCount({initial, horas, onAdd}) {
    const[qty, setQty] = useState(initial)

    const handleAdd = () =>{
        if(qty < horas) {
            setQty(qty + 1)
        }
    }

    const handleSubstract = () => {
        if (qty > 5) {
            setQty(qty - 1)
        }
    }
    
    
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex' }}>
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
    </Card>
  );
};

export default ItemCount;