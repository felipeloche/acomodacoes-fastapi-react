import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

function Imoveis({filtro, mostrarFavoritos}){
    const [imoveis, setImoveis] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const buscarImoveis = async() => {
        try{
            const response = await axios.get('http://localhost:8000/acomodacoes')
            setImoveis(response.data)
        }catch(error){
            consoler.error("Erro ao buscar imoveis: ", error)
        }
    }

    useEffect(() => {
        const favsSalvos = JSON.parse(localStorage.getItem('favoritos'))  || []
        setFavoritos(favsSalvos)
    }, [mostrarFavoritos])

    useEffect(() => {
        buscarImoveis()
    }, [])

    const imoveisFiltrados = imoveis.filter(imovel => {
        const filtroCidade = imovel.cidade.toLowerCase().includes(filtro.toLowerCase())

        if(!mostrarFavoritos) {
            return filtroCidade
        }

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
        return filtroCidade && favoritos.includes(imovel.id)
    })

    return(
        <div>
            {imoveisFiltrados.length === 0 ? (
                <div>Nenhuma acomodação encontrada.</div>
            ):(
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {imoveisFiltrados.map(imovel => (
                        <Card key={imovel.id} imovel={imovel} onFavChange={() => {
                            const favsSalvos = JSON.parse(localStorage.getItem('favoritos')) || []
                            setFavoritos(favsSalvos)
                        }}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Imoveis