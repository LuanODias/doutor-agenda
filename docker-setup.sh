#!/bin/bash

# Script para configurar e iniciar o projeto com Docker

echo "🚀 Configurando Doutor Agenda com Docker..."

# Verifica se o arquivo .env existe
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env a partir do env.example..."
    cp env.example .env
    echo "⚠️  Por favor, edite o arquivo .env e configure todas as variáveis necessárias antes de continuar."
    echo "   Pressione Enter quando terminar..."
    read
fi

# Inicia os containers
echo "🐳 Iniciando containers Docker..."
docker-compose up -d

# Aguarda o PostgreSQL estar pronto
echo "⏳ Aguardando PostgreSQL estar pronto..."
sleep 5

# Executa as migrações
echo "📊 Executando migrações do banco de dados..."
docker-compose exec -T app npx drizzle-kit push || echo "⚠️  Erro ao executar migrações. Execute manualmente: docker-compose exec app npx drizzle-kit push"

echo "✅ Setup concluído!"
echo "🌐 Acesse a aplicação em: http://localhost:3000"
echo ""
echo "📝 Comandos úteis:"
echo "   - Ver logs: docker-compose logs -f"
echo "   - Parar: docker-compose down"
echo "   - Reconstruir: docker-compose up -d --build"

