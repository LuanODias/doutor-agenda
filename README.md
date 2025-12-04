# Doutor Agenda

Sistema de agendamento médico desenvolvido com Next.js 15, TypeScript, PostgreSQL e Drizzle ORM.

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **PostgreSQL** com **Drizzle ORM**
- **Tailwind CSS** e **Shadcn/ui**
- **BetterAuth** para autenticação
- **Stripe** para pagamentos
- **React Hook Form** e **Zod** para formulários

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 20+ (para desenvolvimento local)

## 🐳 Executando com Docker

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd doutor-agenda
```

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo e configure as variáveis:

```bash
cp env.example .env
```

Edite o arquivo `.env` e preencha todas as variáveis necessárias:

- **Database**: Configurações do PostgreSQL (já configuradas para Docker)
- **Google OAuth**: Credenciais do Google OAuth
- **Stripe**: Chaves da API do Stripe e configurações de pagamento

### 3. Execute o setup (opcional)

**Linux/Mac:**
```bash
chmod +x docker-setup.sh
./docker-setup.sh
```

**Windows (PowerShell):**
```powershell
.\docker-setup.ps1
```

Os scripts irão:
- Criar o arquivo `.env` se não existir
- Iniciar os containers Docker
- Executar as migrações do banco de dados

### 4. Ou execute manualmente

Se preferir executar manualmente:

```bash
# Inicie os containers
docker-compose up -d

# Execute as migrações (após os containers estarem rodando)
docker-compose exec app npx drizzle-kit push
```

Isso irá:
- Criar e iniciar o container do PostgreSQL
- Construir e iniciar a aplicação Next.js
- Configurar a rede entre os containers

### 5. Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Desenvolvimento Local

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp env.example .env
```

Edite o arquivo `.env` e configure a `DATABASE_URL` para apontar para o PostgreSQL local ou use Docker apenas para o banco:

```bash
# Para usar apenas o PostgreSQL do Docker
docker-compose up -d postgres
```

### 3. Execute as migrações

```bash
npx drizzle-kit push
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Comandos Docker úteis

```bash
# Ver logs da aplicação
docker-compose logs -f app

# Ver logs do banco de dados
docker-compose logs -f postgres

# Parar os containers
docker-compose down

# Parar e remover volumes (apaga dados do banco)
docker-compose down -v

# Reconstruir a aplicação após mudanças
docker-compose up -d --build app

# Acessar o shell do container da aplicação
docker-compose exec app sh

# Acessar o PostgreSQL
docker-compose exec postgres psql -U postgres -d doutor_agenda
```

## 🔧 Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar em produção
npm start

# Linter
npm run lint
```

## 📚 Estrutura do Projeto

```
doutor-agenda/
├── src/
│   ├── app/              # Rotas e páginas (App Router)
│   ├── components/       # Componentes reutilizáveis
│   ├── db/              # Schema e configuração do Drizzle
│   ├── actions/         # Server Actions
│   ├── lib/             # Utilitários e configurações
│   └── helpers/         # Funções auxiliares
├── public/              # Arquivos estáticos
└── drizzle/             # Migrações do banco de dados
```

## 🗄️ Banco de Dados

O projeto usa **Drizzle ORM** para gerenciar o banco de dados. Para trabalhar com migrações:

```bash
# Gerar migrações
npx drizzle-kit generate

# Aplicar migrações
npx drizzle-kit push

# Abrir Drizzle Studio (interface visual)
npx drizzle-kit studio
```

## 🔐 Autenticação

O projeto usa **BetterAuth** com suporte a:
- Autenticação por email/senha
- OAuth com Google

Configure as credenciais do Google OAuth no arquivo `.env`.

## 💳 Pagamentos

O projeto integra com **Stripe** para gerenciamento de assinaturas. Configure todas as chaves necessárias no arquivo `.env`.

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [BetterAuth](https://www.better-auth.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
