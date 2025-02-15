from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi import HTTPException
from unidecode import unidecode
from fastapi.middleware.cors import CORSMiddleware
import json

#Classe acomodação com os atributos fornecidos no enunciado
class Acomodacao(BaseModel): 
    id: int
    nome: str
    imagem: str
    preco_noite: float
    cidade: str
    estado: str
    
#Iniciação da instância FastAPI
app = FastAPI() 

#CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #Alterar com a origem correta do React no futuro
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

#Requisição Get para listar todas as acomodações ou filtrar por cidade
@app.get("/acomodacoes/", response_model=List[Acomodacao]) #Uso do response model para garantir a tipagem de lista para os dados
async def listar_acomodacoes(cidade: str | None = None):
    with open("data/acomodacoes.json") as arquivo: 
        dados = json.load(arquivo) #Busca os dados no json da pasta data e os converte para uma lista de dicionários
        
    if cidade: #Se a query for uma cidade
        dados = [i for i in dados if unidecode(cidade.lower()) in unidecode(i["cidade"].lower())] #Uso de uma list comprehension ao invés de um for loop
        #Uso do lower e unidecode para evitar problemas de buscas
    return dados

@app.get("/acomodacoes/{id}", response_model=Acomodacao) #Diferente da estrutura de lista acima, dessa vez ele irá olhar para os objetos dentro da lista.
async def buscar_acomodacao(id: int):
    with open("data/acomodacoes.json") as arquivo: #Busca os dados no json da pasta data
        dados = json.load(arquivo)
    for acomodacao in dados:
        if acomodacao["id"] == id: #Valida se o id requisitado é igual ao id do objeto que está sendo olhado no momento, se não for, passa pro próximo
            return acomodacao #Se a condição acima for verdadeira, a função se encerra aqui
    #Se não encontrar nada acima, lance o erro abaixo:
    raise HTTPException(status_code=404, detail="Acomodação não encontrada")
        
