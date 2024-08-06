import { Link } from "react-router-dom"

const Error404 = () => {
    return(
        <div>
            <div className="uk-text-center">
                <h1>⚠️</h1>
                <h2>Error 404</h2>
                <p>¡La página que estás buscando no existe!</p>
                <Link to={"/"} className="uk-button uk-button-default uk-button-medium uk-border-pill">Volver al Inicio</Link>
            </div>
        </div>
    )
}

export default Error404
