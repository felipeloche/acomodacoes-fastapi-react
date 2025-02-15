import { useState, useEffect } from "react"

function Card({imovel, onFavChange}){
    const [favorito, setFavorito] = useState(false)

    useEffect(() =>{
        const favoritosIniciais = JSON.parse(localStorage.getItem('favoritos')) || []
        setFavorito(favoritosIniciais.includes(imovel.id))
    }, [imovel.id])

    const handleFav = () => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

        if(!favorito) {
            favoritos.push(imovel.id)
        }else{
            const index = favoritos.indexOf(imovel.id)
            favoritos.splice(index, 1)
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        setFavorito(!favorito)
        onFavChange()
    }

    return(
        <div className='bg-white rounded-lg shadow-md overflow-hidden relative'>
            <button onClick={handleFav} className='absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100'>
                {favorito ? '♥' : '♡'}</button>
            <img src={imovel.imagem} alt={imovel.nome} className='w-full h-48 object-cover'/>
            <div className='p-4'>
                <h2 className='font-bold text-xl mb-2'>{imovel.nome}</h2>
                <p className='text-gray-600'>{imovel.cidade}</p>
                <p className='text-orange-500 font-bold mt-2'>R$ {imovel.preco_noite}/noite</p>
            </div>
        </div>
    )
}

export default Card