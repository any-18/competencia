import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Img from '../Imgs/lany2.png'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Item({usuarios}) {
    console.log(usuarios, 'haaaa')

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
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Hasta {usuarios.horas} por semana.
                </Typography>
            </CardContent>
            <IconButton variant="subtitle1" color="text.secondary" component="div">
                <Link to={`/detail/${usuarios.id}`}>Ver detalles</Link>
            </IconButton>
        </Box>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Img}
        alt="Live from space album cover"
        />
    </Card>
    )
};
 
export default Item;