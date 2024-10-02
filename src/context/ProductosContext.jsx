import { useState } from "react";
import { createContext } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";
import { useEffect } from "react";


const ProductosContext = createContext()

const ProdusctosProvider = ({children}) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)


    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {
            
            const prods = await helperPeticionesHttp(url, {})

            //console.log (prods)
            setProductos(prods)
            
        } catch (error) {

            console.error('[getAllProductos]', error)

        }
    }

    const crearProductoContexto = async (nuevoProducto) => {

        try {

            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }
    
            const newProducto = await helperPeticionesHttp(url, options)
    
            console.log(nuevoProducto)
    
            setProductos([...productos, newProducto])

        } catch (error) {
            console.errer('[crearProductoContexto]', error)
        }
    }

    const actualizarProductoContext = async (productoEditado) => {

        try {

            const options = {
                method: 'PUT',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(productoEditado) 
            }

            const urlEdicion = url + productoEditado.id

            const editedProduct = await helperPeticionesHttp(urlEdicion, options)
            
            const nuevoEstadoDeProductos = productos.map(
                producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevoEstadoDeProductos)

        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }

    const eliminarProductoContext = async (productoEliminado) => {
        try {
            const options = {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            };
    
            const urlEliminacion = url + productoEliminado.id;
    
            // Ejecutar la solicitud HTTP para eliminar el producto
            await helperPeticionesHttp(urlEliminacion, options);
    
            // Filtrar el producto eliminado del estado actual de productos
            const nuevoEstadoDeProductos = productos.filter(
                producto => producto.id !== productoEliminado.id
            );
            setProductos(nuevoEstadoDeProductos);
            
        } catch (error) {
            console.error('[eliminarProductoContext]', error);
        }
    }

    const data = {
        productos,
        crearProductoContexto,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProductoContext
    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProdusctosProvider}

export default ProductosContext