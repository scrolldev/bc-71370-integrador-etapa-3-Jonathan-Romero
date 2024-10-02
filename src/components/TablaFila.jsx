import { useContext } from "react"
import "./TablaFila.scss"
import ProductosContext from "../context/ProductosContext"


const TablaFila = ( {producto} ) => {

  const {setProductoAEditar, eliminarProductoContext} = useContext(ProductosContext)
  
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }
  
  const handleEliminar = (producto) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      eliminarProductoContext(producto);
    }
  };

  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.descripcion}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} className="img-row" />
      </td>
      <td>{producto.envio? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button onClick={() => handleEliminar(producto)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila