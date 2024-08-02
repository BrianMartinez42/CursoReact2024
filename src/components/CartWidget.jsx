import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    if(totalProducts() > 0) {
        return(
            <Link to={"/cart"}>
                <li>
                    <button href="" className="uk-icon-button" uk-icon="cart">
                        <span className="uk-badge">{totalProducts()}</span>
                    </button>
                </li>
            </Link>
        )
    } else {
        return(
            <Link to={"/cart"}>
                <li>
                    <button href="" className="uk-icon-button" uk-icon="cart">
                        <span className="uk-badge">0</span>
                    </button>
                </li>
            </Link>
        ) 
    }
}

export default CartWidget