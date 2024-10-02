import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../context/CarritoContext'

const Card = ({ producto }) => {

  const {agregarProductoAlCarritoContext} = useContext(CarritoContext)

  const handleAgregar = (producto) => {

    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)

  }

  return (
    <div className="card">
          <article className="card__article">
            <div className="card__image-conteiner">
              <img src={producto.foto} alt={producto.nombre} className="card__image" />
            </div>
            <div className="card__content">
              <h2 className="card__heading">{producto.nombre}</h2>
              <div className="card__description">
                <p>
                  {producto.descripcion}
                </p>
                <p>
                  {producto.precio}
                </p>
                <button onClick={() => handleAgregar (producto)}>Agregar</button>
              </div>            
            </div>
          </article>
        </div>
  )
}

export default Card