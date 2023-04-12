import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Shopping Virtual Deportivo</h3>
            <div class="botones">
                <button>Guantes</button>
                <button>Vendas</button>
                <button>Bucales</button>
                <button>Proteinas</button>
                <button>Batidores</button>
                <button>Cinturones</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar