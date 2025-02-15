import {useState} from 'react'
import Imoveis from '../components/Imoveis'
import Filtro from '../components/Filtro'

function Alocacoes(){
    const [textoBusca, setTextoBusca] = useState('')
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false)

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold text-gray-900 mb-6'>Acomodações Disponíveis</h1>
            <Filtro onBusca={setTextoBusca} onFiltroFavoritos={setMostrarFavoritos}/>
            <Imoveis filtro={textoBusca} mostrarFavoritos={mostrarFavoritos}/>
        </div>
    )
}

export default Alocacoes