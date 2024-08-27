import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'

const Inicio = () => {

  useTitulo('Inicio')

  return (
    <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h2>Productos Destacados</h2>
      </header>
      
      <div className="cards_container" id="contenedor-cards">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </section>
  </main>
  )
}

export default Inicio