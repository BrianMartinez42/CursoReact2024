import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id): arrayProductos)
            }, 2000);
        })

        promesa.then(response => {
            setItems(response)
        })

    }, [id]) 

    return(
        <>
            <div className="uk-child-width-1-3 uk-grid">
                <ItemList items={items}/>
            </div>
        </>
    )
}

export default ItemListContainer