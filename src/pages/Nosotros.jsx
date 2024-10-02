import './Nosotros.scss'
import useTitulo from "../hooks/useTitulo"

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <main>
    <section class="main-section">
      <div class="main-section__image">
        <img src="/img/img_nosotros.webp" alt="imagen" />
      </div>

      <div class="main-section__content">
        <h1>Nosotros</h1>
        <p><strong>Nuestra misión es proporcionarte soluciones versátiles y convenientes en un solo lugar.</strong> Valoramos la calidad, la diversidad y la satisfacción del cliente, seleccionando cuidadosamente cada artículo en nuestro catálogo. Ya sea que estés buscando productos de vanguardia, transformar tu entorno hogareño o cuidar de ti mismo, estamos aquí para brindarte opciones que se ajusten a tus necesidades y deseos.</p>
      </div>
    </section>

    <section class="main-section main--inverter">
      <div class="main-section__content">
        <p>Nos esforzamos por ofrecerte una <strong>experiencia de compra excepcional</strong>, respaldada por productos que han pasado rigurosos estándares de calidad y creemos en la conveniencia de encontrar todo lo que necesitas en un solo lugar. Estamos encantados de ser tu socio confiable en tu búsqueda de productos que enriquezcan y faciliten tu vida cotidiana.</p>
      </div>

      <div class="main-section__image">
        <img src="/img/img_nosotros-2.webp" alt="imagen" />
      </div>
    </section>
  </main>
  )
}

export default Nosotros