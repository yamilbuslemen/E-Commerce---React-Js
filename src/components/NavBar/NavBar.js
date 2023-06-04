
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Shopping Virtual Deportivo</h3>
            </Link>
            <div class='Categories'>
                <NavLink to={`/category/Guantes`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Guantes</NavLink>  
                <NavLink to={`/category/Vendas`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Vendas</NavLink>
                <NavLink to={`/category/Bucales`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Bucales</NavLink>
                <NavLink to={`/category/Proteinas`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Proteinas</NavLink>
                <NavLink to={`/category/Batidores`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Batidores</NavLink>
                <NavLink to={`/category/Cinturones`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Cinturones</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar