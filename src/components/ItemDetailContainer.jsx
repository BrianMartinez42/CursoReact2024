import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItems] = useState({});
    const {id} = useParams();

    useEffect( () => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id == id))
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })

    }, []) 

    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer