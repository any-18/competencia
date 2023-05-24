import ItemList from "./Itemlist";
import { useEffect, useState } from "react";
import {Usuarios} from './Usuarios.js';

function ItemListContainer(props) {

    const [usuarios, setUsuarios] = useState([])
    //console.log(usuarios, 'este es');

    const getUsuarios = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(Usuarios)
            }, 700)
        })
    }
    useEffect(() => {
        const misUsuarios = async () => {
        try {
            const res = await getUsuarios()
            setUsuarios(res)
        } catch (error) {
            console.log(error)
        }
    }
    misUsuarios();
    }, [])
    

    return (
        <div>
            <h2>AnyShop</h2>
            <h1>{props.gretting}</h1>
            <ItemList usuarios={usuarios}></ItemList>
        </div>
    )
};

export default ItemListContainer;