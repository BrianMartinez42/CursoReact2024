import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const[contador, setContador] = useState(1);
    const[itemStock, setItemStock] = useState(stock);
    const[visible, setVisible] = useState(true);
    const incrementar = () => {
        if(contador < itemStock){
            setContador(contador + 1)
        }
    }
    
    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        if(contador <= itemStock){
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
            console.log("Agregaste " + contador + " producto al carrito!");
        }
    }

    useEffect(()=>{
        setItemStock(stock)
    }, [stock])

    return(
        <>
            { visible ? 
                <div>
                    <div className="uk-align-center uk-button-group">
                        <button className="uk-button uk-background-secondary uk-light uk-button-small" onClick={decrementar}>-</button>
                        <button className="uk-button uk-background-secondary uk-light uk-button-small">{contador}</button>
                        <button className="uk-button uk-background-secondary uk-light uk-button-small" onClick={incrementar}>+</button>
                    </div>
                    <button className="uk-button uk-border-pill uk-background-secondary uk-light" onClick={addToCart}>Agregar al Carrito</button>
                </div>
            : <Link to={"/cart"} className="uk-button uk-background-secondary uk-light uk-button-small uk-border-pill">Terminar mi compra</Link>}
        </> 
    )
}

export default ItemCount