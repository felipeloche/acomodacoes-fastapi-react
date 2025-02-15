# Uso da versão slim para não pesar tanto a imagem
FROM python:3.11-slim

#Define o diretório de trabalho
WORKDIR /app

# Copia o requirements e instala as dependencias inicialmente
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Agora, copia o resto dos arquivos para o workdir
COPY . .

# Roda a instância app usando o servidor uvicorn na porta 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]