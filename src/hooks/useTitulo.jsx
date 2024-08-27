import { useEffect } from "react"

const useTitulo = ( textoTitulo = 'Sin titulo') => {

    useEffect(() => {
        document.title = `ScrollTech - ${textoTitulo}`
    }, [])
}

export default useTitulo