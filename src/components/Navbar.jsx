import '../index.css'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="uk-navbar-container uk-background-default" uk-navbar="true" id='mi-navbar'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to={"/"}>
                <img className="uk-border-circle" src="/logo.jpeg" width="30" height="30" alt="Border circle"/> Flow Fitness
              </Link> 
            </li>
            <li>
              <a href="#">Categorías</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-dropdown-nav">
                    <li>
                      <NavLink to={"/category/mancuernas"}>Mancuernas</NavLink>
                      </li>
                    <li>
                      <NavLink to={"/category/maquinas"}>Máquinas</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/category/estructuras"}>Estructuras</NavLink>
                    </li>
                </ul>
              </div>
            </li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li>
              <ul className="uk-iconnav">
                <CartWidget/>
                <li><a href="#" className="uk-icon-button uk-margin-small-right" uk-icon="user"></a></li>
              </ul>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

