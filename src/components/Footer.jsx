import './Footer.scss'

const Footer = () => {
  return (
    <footer class="footer">
    <section class="footer__section">
      <div class="footer__logo">
        <h4><a href="/index.html">ScrollTech</a></h4>
      </div>
  
      <div class="footer-contacto">
        <h4><span>Contacto</span></h4>
        <p><span>Whatsapp</span></p>
        <p><span>+541156345654</span></p>
        <p><span>E-mail</span></p>
        <a href="#">info@scrolltech.com</a>
      </div>
  
      <div class="footer-categorias">
        <h4><span>Categorias</span></h4>
        <p>
          <a href="#">Celulares y Teléfonos</a>
          <a href="#">Computación</a>
          <a href="#">Consolas y Videojuegos</a>
          <a href="#">Electrodomésticos</a>
        </p>
      </div>
    </section>
  </footer>
  )
}

export default Footer