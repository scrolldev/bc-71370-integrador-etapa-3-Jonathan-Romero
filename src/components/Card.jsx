import './Card.scss'

const Card = () => {
  return (
    <div className="card">
          <article className="card__article">
            <div className="card__image-conteiner">
              <img src="img/apple-iphone-11-pro-max.jpg" alt="Iphone 11 Pro" className="card__image" />
            </div>
            <div className="card__content">
              <h2 className="card__heading">Iphone 11 Pro</h2>
              <div className="card__description">
                <p>256 GB</p>
                <p>Batería: 83%</p>
                <p>TELEFONO EN PERFECTO ESTADO FUNCIONAL</p>
              </div>            
            </div>
          </article>
        </div>
  )
}

export default Card