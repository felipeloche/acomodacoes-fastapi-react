import { useState, useEffect } from 'react'
import axios from 'axios'

function Alocacoes(){
    const [imoveis, setImoveis] = useState([])

    const buscarImoveis = async() => {
        try{
            const response = await axios.get('http://localhost:8000/acomodacoes')
            setImoveis(response.data)
        }catch(error){
            consoler.error("Erro ao buscar imoveis: ", error)
        }
    }

    useEffect(() => {
        buscarImoveis()
    }, [])

    return(
        <div className='p-8'>
            <h1 className='text-2xl font-bold text-gray-900 mb-6'>Acomodações Disponíveis</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {imoveis.map(imovel => (
                    <div key={imovel.id} className='bg-white rounded-lg shadow-md overflow-hidden relative'>
                        <button className='absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100'>♡</button>
                        <img src={imovel.imagem} alt={imovel.nome} className='w-full h-48 object-cover'/>
                        <div className='p-4'>
                            <h2 className='font-bold text-xl mb-2'>{imovel.nome}</h2>
                            <p className='text-gray-600'>{imovel.cidade}</p>
                            <p className='text-orange-500 font-bold mt-2'>R$ {imovel.preco_noite}/noite</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Alocacoes