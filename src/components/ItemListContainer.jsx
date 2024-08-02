import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { getDoc, getFirestore} from "firebase/firestore"

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

    // useEffect(() =>{
    //     const db = getFirestore();
    //     const docRef = doc(db, "items","ID DEL ITEM");
    //     getDoc(docRef).then(documento =>{
    //         console.log(documento);
    //         if(documento.exists()){
    //             setItems({id:documento.id, ...documento.data()})
    //             console.log("ID",documento.id);
    //             console.log(documento.date());
    //         }else{
    //             console.log("No existe");
    //         }
    //     })
    // }, [])

    return(
        <>
            <div className="uk-child-width-1-3 uk-grid">
                <ItemList items={items}/>
            </div>
        </>
    )
}

export default ItemListContainer