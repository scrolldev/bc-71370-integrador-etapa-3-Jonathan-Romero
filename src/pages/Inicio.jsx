import { useContext } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'

const Inicio = () => {

  const {productos} = useContext(ProductosContext)

  useTitulo('Inicio')

  return (
    <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h2>Productos Destacados</h2>
      </header>
      
      <div className="cards_container" id="contenedor-cards">

        {
          productos && productos.map((producto) => (

            <Card key={producto.id} producto={producto}/>

          ))
        }
        
      </div>

    </section>
  </main>
  )
}

export default Inicio