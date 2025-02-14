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
- Python 3.8+
- Node.js
- NPM/Yarn