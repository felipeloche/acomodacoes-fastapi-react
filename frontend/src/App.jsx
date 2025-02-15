{/*Importação das rotas, páginas e componentes necessários */}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Alocacoes from './pages/Alocacoes'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter> {/*Definição das rotas*/}
    <div>
      <Navbar /> {/*Navbar que constará em todas as páginas*/}
      <Routes>
        <Route path="/" element={<Home />} /> {/*Página Inicial*/}
        <Route path="/alocacoes" element={<Alocacoes />} /> {/*Página das alocações*/}
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App