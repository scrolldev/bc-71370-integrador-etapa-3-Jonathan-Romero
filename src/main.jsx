import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ProdusctosProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
    <ProdusctosProvider>
        <CarritoProvider>
            <App />
        </CarritoProvider>
    </ProdusctosProvider>
  
)
