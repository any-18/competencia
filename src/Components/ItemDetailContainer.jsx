import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Usuarios} from './Usuarios.js';
import ItemDetail from "./ItemDetail.jsx";

function ItemDetailContainer() {

    const [usuario, setUsuario] = useState([])
    const {id} = useParams()
    //console.log(usuario, 'este es');

    const getUsuario = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(Usuarios)
            }, 100)
        })
    }
    useEffect(() => {
        const miUsuario = async () => {
        try {
            const res = await getUsuario()
            const info = res.find(e => e.id === parseInt(id))
            setUsuario(info)
        } catch (error) {
            console.log(error)
        }
    }
    miUsuario();
    }, [id])
    

    return (
        <div>
            <h2>AnyShop</h2>
            <ItemDetail usuarios={usuario}></ItemDetail>
        </div>
    )
};

export default ItemDetailContainer;