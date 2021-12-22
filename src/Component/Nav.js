import { Link } from "react-router-dom"
import Icon from './Asset/website_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'

const Nav = () => {
    return(
        <nav>
            <div id="nav-container">
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <img src={Icon} alt="Website logo" id="logo"/>
                </Link>
                <ul className="nav-items">
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                        <li>Accueil</li>
                    </Link>
                    <Link to="/products" style={{textDecoration: 'none', color: 'white'}}>
                        <li>Boutique</li>
                    </Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
                        <li>
                            <FontAwesomeIcon  icon={faShoppingCart} size="lg" className="cart-not-empty"/>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav