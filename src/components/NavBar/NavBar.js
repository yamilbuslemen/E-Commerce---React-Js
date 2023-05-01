
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Shopping Virtual Deportivo</h3>
            </Link>
            <div class='Categories'>
                <NavLink to={`/category/guantes`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Guantes</NavLink>  
                <NavLink to={`/category/vendas`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Vendas</NavLink>
                <NavLink to={`/category/bucales`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Bucales</NavLink>
                <NavLink to={`/category/proteinas`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Proteinas</NavLink>
                <NavLink to={`/category/batidores`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Batidores</NavLink>
                <NavLink to={`/category/cinturones`} className={({ isActive}) => isActive ? ' ActiveOption' : 'Option'}>Cinturones</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar