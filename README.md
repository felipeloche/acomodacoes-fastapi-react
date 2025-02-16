# Sistema de Busca de Acomodações

## 🎯 Sobre o Projeto
Sistema que integra uma API REST (FastAPI) com frontend React para busca de acomodações disponíveis para locação de temporada.

## 🚀 Funcionalidades

### Backend (FastAPI)
- GET /acomodacoes → Lista de acomodações
- GET /acomodacoes/{id} → Detalhes de acomodação específica
- GET /acomodacoes?cidade=Florianópolis → Filtro por cidade

### Frontend (React)
- Lista de acomodações com imagem, nome, preço e localização
- Campo de busca para filtro por cidade
- Sistema de favoritos usando localStorage
- Página de detalhes da acomodação
- Design responsivo

## 🛠️ Tecnologias
- Backend: Python + FastAPI
- Frontend: React
- Dados: JSON (mock)

## 📋 Pré-requisitos
- Docker
- Docker Compose

## 🔧 Instalação e Execução

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
```
2. No diretório do projeto, execute:
```bash
docker-compose up --build
```
3. Acesse a aplicação:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000/docs (Documentação da API)
4. Para parar a aplicação:
```bash
docker-compose down
```