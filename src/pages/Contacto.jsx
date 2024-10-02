import './Contacto.scss'
import useTitulo from "../hooks/useTitulo"

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <main className="main-contacto">
    <section className="container">
      <h1>Contactanos</h1>
      <form className="form-responsive">
        <fieldset className="fieldset-cambio">
            
          <div className="input-container">
            <label htmlFor="nombre">Nombre:*</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="input-container">
            <label htmlFor="apellido">Apellido:*</label>
            <input type="text" id="apellido" name="apellido" />
          </div>
          <div className="input-container">
            <label htmlFor="email">E-Mail:*</label>
            <input type="text" id="email" name="email" />
          </div>
        </fieldset>

        <div className="input-container">
          <label htmlFor="lbl-mensaje">Mensaje...</label>
          <textarea name="mensaje" id="lbl-mensaje" cols="15" rows="6"></textarea>
        </div>

        <div className="button-container">
          <button className="button">Enviar</button>
        </div>
      </form>
    </section>
  </main>
  )
}

export default Contacto