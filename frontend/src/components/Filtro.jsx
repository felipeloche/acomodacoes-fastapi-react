import { useState } from 'react'

function Filtro({onBusca, onFiltroFavoritos}){
    const [busca, setBusca] = useState('')
    const [filtroFavoritos, setFiltroFavoritos] = useState(false)

    const handleChange = (e) => {
        setBusca(e.target.value)
        onBusca(e.target.value)
    }

    const handleFavs = () => {
        setFiltroFavoritos(!filtroFavoritos)
        onFiltroFavoritos(!filtroFavoritos)
    }

    return (
        <div>
            <button onClick={handleFavs} 
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
            filtroFavoritos 
            ? 'bg-orange-500 text-white hover:bg-white hover:text-orange-500 border border-orange-500'
            : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500'
            }`}> 
                {filtroFavoritos ? '♥ Mostrar todos' : '♡ Mostrar favoritos'}</button>
            <input 
                type='text' 
                placeholder='Busque sua cidade favorita!'
                className='w-full mb-4 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                value={busca}
                onChange={handleChange}
            />
        </div>
    )
}

export default Filtro