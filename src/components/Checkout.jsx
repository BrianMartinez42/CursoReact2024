import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import UIkit from 'uikit';

const Checkout = () => {
    const {cart, totalProducts, sumProducts, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if(nombre == "") {
           return false;
        }

        if(email == "") {
            return false;
        }

        if(telefono == "") {
            return false;
        }

        const order = {
            buyer: {name: nombre, phone: telefono, email: email},
            items: cart.map(item => ({id: item.id, title: item.title, price: item.price})),
            total: sumProducts()
        }

        clear();
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            UIkit.modal("#modal-compra").show();
        })
    }

    if(totalProducts() == 0){
        return (
            <div>
                <div className="uk-text-center">
                    <h1 >Tu carrito está vacío.</h1>
                    <Link to={"/"} className="uk-button uk-button-default uk-button-medium uk-border-pill">Volver al Inicio</Link>
                </div>
                <div id="modal-compra">
                    <div className="uk-modal-dialog uk-modal-body">
                        <h2 className="uk-modal-title">¡Gracias por tu compra!</h2>
                        <p>El Número de tu orden es: <b>{orderId}</b></p>
                        <p className="uk-text-right">
                            <Link to={"/"} className="uk-button uk-button-secondary">Volver al Inicio</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="uk-column-1-2 uk-column-divider">
            <div className="uk-overflow-auto">
                <form className="uk-form-horizontal uk-margin-large">

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="nombre">Nombre</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" type="text" placeholder="Nombre completo" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="email">Email</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" type="text" placeholder="ejemplo@email.com" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="telefono">Teléfono</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" type="text" placeholder="XXXX XXXX XXXX" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                    </div>
                </form>
                <div className="uk-text-center"> <button className="uk-button uk-button-default uk-border-pill" onClick={generarOrden}>Generar Orden</button> </div>
            </div>

            <div className="uk-overflow-auto">
                <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img className="uk-preserve-width uk-border-circle" src={item.image} width="65" height="65" alt=""/></td>
                                <td className="uk-text-nowrap">{item.title}</td>
                                <td className="uk-text-nowrap">${item.price} ({item.quantity})</td>
                                <td className="uk-text-nowrap">${item.price * item.quantity}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="uk-text-center">Total a Pagar</td>
                            <td>${sumProducts()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Checkout