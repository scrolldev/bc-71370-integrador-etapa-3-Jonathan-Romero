import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
        <div className="search-bar">
            <div className="search-bar__logo-container">
                <h1>ScrollTech</h1>
            </div>
            <form action="#" className="search-bar__form-conteiner">
                <label htmlFor="busqueda" className="search-bar__form-label"></label>
                <input type="search" className="search-bar__form-search" id="busqueda" />
                <input type="submit" className="search-bar__form-submit" value="Buscar" />
            </form>
            <div className="search-bar__carrito-container"><Link to="carrito"><i className="fa-solid fa-bag-shopping"></i></Link></div>
            <div className="menu-toogle">
                <label htmlFor="menu" className="menu-toogle__label">
                    <span className="menu-toogle__top-bread"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__bottom-bread"></span>
                </label>
            </div>
        </div>   
  )
}

export default SearchBar