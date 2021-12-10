const NavBar = () => (
    <nav className="navbar">
        <img className="navbar__logo" src="https://comeschile.cl/wp-content/uploads/2021/07/bajadaS.png" alt="" />
        <div className="search">
            <input className="search__input" type="text" id="inputSearch" placeholder="Ingresa tu búsqueda"/>
            <button className="search__btn">Ir</button>
        </div>
        <ul className="navbar__actions">
            <li><img src="/img/heart-solid.svg" height="32px" width="32px" alt="" /></li>
            <li><img src="/img/store-solid.svg" height="32px" width="32px" alt="" /></li>
            <li><img src="/img/user-solid.svg" height="32px" width="32px" alt="" /></li>
        </ul>
    </nav>
)

export default NavBar