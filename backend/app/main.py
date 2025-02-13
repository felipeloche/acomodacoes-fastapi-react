from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import json

#Classe acomodação com os atributos fornecidos no enunciado
class Acomodacao(BaseModel): 
    id: int
    nome: str
    imagem: str
    preco_noite: float
    localizacao: str
    
#Iniciação da instância FastAPI
app = FastAPI() 

#Requisição Get para listar todas as acomodações
@app.get("/acomodacoes/", response_model=List[Acomodacao]) #Uso do response model para garantir a tipagem de lista para os dados
async def listar_acomodacoes():
    with open("data/acomodacoes.json") as arquivo: #Busca os dados no json da pasta data
        dados = json.load(arquivo)
    return dados