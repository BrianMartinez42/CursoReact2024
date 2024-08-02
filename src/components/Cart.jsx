import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, totalProducts, sumProducts} = useContext(CartContext);

    if(totalProducts() == 0){
        return (
            <div className="uk-text-center">
                <h1 >Tu carrito está vacío.</h1>
                <Link to={"/"} className="uk-button uk-button-default uk-button-small uk-border-pill">Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <tbody>
                    <tr>
                        <td className="uk-text-right" colSpan={5}><button className="uk-button uk-button-default uk-button-small uk-border-pill" onClick={()=>{clear()}}>Vaciar Carrito <span uk-icon="trash"></span></button></td>
                    </tr>
                    {cart.map(item => (
                        <tr key={item.id}>
                            {/* <td><input className="uk-checkbox" type="checkbox" aria-label="Checkbox"/></td> */}
                            <td><img className="uk-preserve-width uk-border-circle" src={item.image} width="65" height="65" alt=""/></td>
                            <td className="uk-text-nowrap">{item.title}</td>
                            <td className="uk-text-nowrap">${item.price} ({item.quantity})</td>
                            <td className="uk-text-nowrap">${item.price * item.quantity}</td>
                            <td className="uk-text-nowrap"><button uk-icon="trash" onClick={()=>{removeItem(item.id)}} ></button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3} className="uk-text-center">Total a Pagar</td>
                        <td>${sumProducts()}</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart