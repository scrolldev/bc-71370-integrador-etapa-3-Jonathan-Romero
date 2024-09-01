import { useState } from "react";
import { createContext } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";
import { useEffect } from "react";


const ProductosContext = createContext()

const ProdusctosProvider = ({children}) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {
            
            const prods = await helperPeticionesHttp(url, null)

            console.log (prods)
            
        } catch (error) {

            console.log('[getAllProductos]', error)

        }
    }

    const data = {

    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProdusctosProvider}

export default ProductosContext