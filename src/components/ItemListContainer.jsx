import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
            } else {
                console.error("Error! No existe la Colección 'items'!");
            }
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