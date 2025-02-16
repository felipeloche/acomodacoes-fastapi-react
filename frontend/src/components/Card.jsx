//Componente responsável por cada card de alocação
import { useState, useEffect } from "react"

//Estados para controlar se o imóvel está favoritado ou no modo de detalhamento (zoom)
function Card({imovel, onFavChange}){
    const [favorito, setFavorito] = useState(false)
    const [zoomCard, setZoomCard] = useState(false)

    //Efeito responsável por verificar se o imóvel está ou não nos favoritos inicialmente
    useEffect(() =>{
        const favoritosIniciais = JSON.parse(localStorage.getItem('favoritos')) || []
        setFavorito(favoritosIniciais.includes(imovel.id))
    }, [imovel.id])

    //Gerencia adição\remoção dos favoritos
    const handleFav = () => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

        if(!favorito) {
            favoritos.push(imovel.id)
        }else{
            const index = favoritos.indexOf(imovel.id)
            favoritos.splice(index, 1)
        }

        //Armazena o item favoritado no local storage
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        setFavorito(!favorito)
        onFavChange()
    }

    //Responsável pelo zoom no card (detalhamento)
    const handleClick = (e) => {
        if (e.target.tagName !== 'BUTTON') {
            setZoomCard(true)
        }
    }

    return(
        //Uso do fragment para poder listar o grid de cards e o card detalhado em zoom
        <>
            {/*Cada imóvel da lista*/}
            <div className='bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer' onClick={handleClick}>
                {/* Botão de favorito*/}
                <button onClick={handleFav} className='absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100'>
                    {favorito ? '♥' : '♡'}</button>
                {/*Imagem do imóvel*/}
                <img src={imovel.imagem} alt={imovel.nome} className='w-full h-48 object-cover'/>
                {/*Container com informações dos imóveis*/}
                <div className='p-4'>
                    <h2 className='font-bold text-xl mb-2'>{imovel.nome}</h2>
                    <p className='text-gray-600'>{imovel.cidade}</p>
                    <p className='text-orange-500 font-bold mt-2'>R$ {imovel.preco_noite}/noite</p>
                </div>
            </div>
            {/*Tela de detalhes sobreposta*/}
            {zoomCard && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/*Fundo preto e opaco ao clicar em um card*/}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    {/*Container do zoom*/}
                    <div className="bg-white rounded-lg p-6 relative w-[600px] mx-4">
                        {/*Botão para fechar o detalhamento*/}
                        <button onClick={() => setZoomCard(false)} className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 shadow-md">✕</button>
                        {/*Imagem ampliada*/}
                        <img src={imovel.imagem} alt={imovel.nome} className="w-full h-[300px] object-cover rounded-lg"/>
                        {/*Detalhamento - Aqui mostra também o estado como localização*/}
                        <div className="mt-4">
                            <h2 className="font-bold text-2xl">{imovel.nome}</h2>
                            <p className="text-gray-600">{imovel.cidade}, {imovel.estado}</p>
                            <p className="text-orange-500 font-bold mt-2 text-xl">R$ {imovel.preco_noite}/noite</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card