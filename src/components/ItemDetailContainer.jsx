import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.error("Error! No existe el documento!");
            }
        })
    }, [id])

    return(
        <>
            {loading ? <Loading/> :
                <ItemDetail item={item}/>
            }
        </>
    )
}

export default ItemDetailContainer