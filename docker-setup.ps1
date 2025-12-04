# Script PowerShell para configurar e iniciar o projeto com Docker

Write-Host "🚀 Configurando Doutor Agenda com Docker..." -ForegroundColor Cyan

# Verifica se o arquivo .env existe
if (-not (Test-Path .env)) {
    Write-Host "📝 Criando arquivo .env a partir do env.example..." -ForegroundColor Yellow
    Copy-Item env.example .env
    Write-Host "⚠️  Por favor, edite o arquivo .env e configure todas as variáveis necessárias antes de continuar." -ForegroundColor Yellow
    Write-Host "   Pressione Enter quando terminar..."
    Read-Host
}

# Inicia os containers
Write-Host "🐳 Iniciando containers Docker..." -ForegroundColor Cyan
docker-compose up -d

# Aguarda o PostgreSQL estar pronto
Write-Host "⏳ Aguardando PostgreSQL estar pronto..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Executa as migrações
Write-Host "📊 Executando migrações do banco de dados..." -ForegroundColor Cyan
docker-compose exec -T app npx drizzle-kit push
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Erro ao executar migrações. Execute manualmente: docker-compose exec app npx drizzle-kit push" -ForegroundColor Yellow
}

Write-Host "✅ Setup concluído!" -ForegroundColor Green
Write-Host "🌐 Acesse a aplicação em: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Comandos úteis:" -ForegroundColor Cyan
Write-Host "   - Ver logs: docker-compose logs -f"
Write-Host "   - Parar: docker-compose down"
Write-Host "   - Reconstruir: docker-compose up -d --build"

