import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ItemCount from "./ItemCount";

function Item({usuarios}) {
    console.log(usuarios, 'haaaa')
    

    const onAdd = (qty) => {
        console.log = qty
    }

    return (
        
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {usuarios.nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {usuarios.pais}
          </Typography>
        </CardContent>
        <ItemCount horas={usuarios.horas} initial={5} onAdd={onAdd}></ItemCount>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="../Imgs/jpglany2.jpg"
        alt="Live from space album cover"
      />
    </Card>
    )
};
 
export default Item;