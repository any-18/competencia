import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Img from '../Imgs/lany2.png'
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

function ItemDetail({usuarios}) {

    const [usuario, setUsuario] = useState({})

    const onAdd = (qty) => {
        setUsuario(usuarios)
        console.log(qty)
    }

    console.log('ElUsuario:', usuario)

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
                        {usuarios.ciudad}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {usuarios.habilidades_tecnicas}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Hasta {usuarios.horas} horas por semana
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {usuarios.minibiografia}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {usuarios.edad} años
                    </Typography>
                </CardContent>
                    {usuario.id ?
                        <div>
                            <Link to={`/cart`}>
                                <IconButton variant="subtitle1" color="text.secondary" component="div">
                                    Finalizar compra
                                </IconButton>
                            </Link>
                            <hr></hr>
                            <Link to={`/`}>
                                <IconButton variant="subtitle1" color="text.secondary" component="div">
                                    Seguri comprando
                                </IconButton>    
                            </Link>
                        </div>
                        :
                        <ItemCount horas={usuarios.horas} initial={5} onAdd={onAdd}></ItemCount>
                    }
            </Box>
            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={Img}
            alt="Live from space album cover"
            />
        </Card>
    )
}

export default ItemDetail;