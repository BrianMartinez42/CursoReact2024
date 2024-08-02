import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <>
            <div className="uk-panel uk-card uk-card-default">
                <img src={item.image} className="uk-align-center uk-align-left@m uk-margin-remove-adjacen" width="500" height="500" alt=""/>
                <h3 className="uk-card-title">{item.title}</h3>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </>
    )
}

export default ItemDetail