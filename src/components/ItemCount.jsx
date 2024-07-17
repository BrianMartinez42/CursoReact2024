import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const[contador, setContador] = useState(1);
    const[itemStock, setitemStock] = useState(stock);

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
    
    const onAdd = () => {
        if(contador <= itemStock){
            setitemStock(itemStock - contador);
            setContador(1);
        }
    }

    useEffect(()=>{
        setitemStock(stock)
    }, [stock])

    return(
        <>
            <div className="uk-align-center">
                <button className="uk-button uk-button-secondary uk-button-small" onClick={decrementar}>-</button>
                <button className="uk-button uk-button-secondary uk-button-small">{contador}</button>
                <button className="uk-button uk-button-secondary uk-button-small" onClick={incrementar}>+</button>
            </div>
            <button className="uk-button uk-button-secondary uk-button-small uk-border-pill" onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount