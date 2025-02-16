//Página principal para listar as alocações
import {useState} from 'react'
import Imoveis from '../components/Imoveis'
import Filtro from '../components/Filtro'

function Alocacoes(){
    //Estados compartilhados entre Filtro e Imóoveis
    const [textoBusca, setTextoBusca] = useState('') //Controle filtro de texto
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false) //Controla filtro de favoritos

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold text-gray-900 mb-6'>Acomodações Disponíveis</h1>
            {/* Componente de filtros */}
            <Filtro onBusca={setTextoBusca} onFiltroFavoritos={setMostrarFavoritos}/>
            {/* Componente da lista de imóveis */}
            <Imoveis filtro={textoBusca} mostrarFavoritos={mostrarFavoritos}/>
        </div>
    )
}

export default Alocacoes