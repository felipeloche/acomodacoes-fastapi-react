# Usa a versão slim do Node 20 como base
FROM node:20-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o resto dos arquivos do projeto
COPY . .

# Faz o build do projeto
RUN npm run build

# Instala um servidor leve para servir a aplicação em produção
RUN npm install -g serve

# Expõe a porta que será usada
EXPOSE 3000

# Comando para servir a aplicação
CMD ["serve", "-s", "dist", "-l", "3000"]