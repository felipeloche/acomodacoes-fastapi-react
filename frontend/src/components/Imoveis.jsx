//Componente que exibe a lista de alocações geral
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

//Recebe o texto do filtro e o estado dos favoritos do Alocacoes.jsx
function Imoveis({filtro, mostrarFavoritos}){
    //Armazena todos imóveis recebidos da api
    const [imoveis, setImoveis] = useState([])
    //Armazena o id de todos imóveis favoritados
    const [favoritos, setFavoritos] = useState([])

    //Busca os imóveis na api
    //Endereço final levando em consideração o dockerfile e docker-compose
    const buscarImoveis = async() => {
        try{
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await axios.get(`${apiUrl}/acomodacoes`);
            setImoveis(response.data);
        }catch(error){
            console.error("Erro ao buscar imoveis: ", error);
        }
    }

    //Efeito que executa ao mudar a visualizaçao dos favoritos
    //Atualiza favoritos no local storage
    useEffect(() => {
        const favsSalvos = JSON.parse(localStorage.getItem('favoritos'))  || []
        setFavoritos(favsSalvos)
    }, [mostrarFavoritos])

    //Efeito para buscar a lista inicial de imóveis
    useEffect(() => {
        buscarImoveis()
    }, [])

    //Filtra os imoveis baseado no texto de busca e favoritos
    const imoveisFiltrados = imoveis.filter(imovel => {
        //Filtro de cidade
        const filtroCidade = imovel.cidade.toLowerCase().includes(filtro.toLowerCase())
        // Se não estiver mostrando favoritos, retorna filtro de cidade
        if(!mostrarFavoritos) {
            return filtroCidade
        }
        // Se estiver mostrando favoritos, verifica se o imóvel está ou não
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
        return filtroCidade && favoritos.includes(imovel.id)
    })

    return(
        <div>
            {/* Mostra mensagem se nenhum imóvel foi encontrado */}
            {imoveisFiltrados.length === 0 ? (
                <div>Nenhuma acomodação encontrada.</div>
            ):(
                //Grid de cards
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {imoveisFiltrados.map(imovel => ( // Cria um card para cada imóvel da lista
                        <Card key={imovel.id} imovel={imovel} 
                            onFavChange={() => { // atualiza a lista instantaneamente quando um imóvel é favoritado ou desfavoritado
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