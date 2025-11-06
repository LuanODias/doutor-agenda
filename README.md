<div align="center"> <h1 style="font-size: 3rem; font-weight: bold; border-bottom: none;"> Doutor Agenda </h1>

<p> <strong>Um sistema SaaS (Software as a Service) completo para gerenciamento de agendamentos em clínicas médicas.</strong> </p> <p> Construído com as tecnologias mais modernas, incluindo Next.js (App Router), Drizzle ORM, Stripe, Better Auth e Shadcn/ui. </p>

<p> <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=nextdotjs" alt="Next.js"> <img src="https://img.shields.io/badge/Auth-Better_Auth-blue?style=flat-square" alt="Better Auth"> <img src="https://img.shields.io/badge/ORM-Drizzle-brightgreen?style=flat-square&logo=drizzle" alt="Drizzle ORM"> <img src="https://img.shields.io/badge/Payments-Stripe-blueviolet?style=flat-square&logo=stripe" alt="Stripe"> <img src="https://img.shields.io/badge/UI-Shadcn/ui-black?style=flat-square" alt="Shadcn/ui"> <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&logo=postgresql" alt="PostgreSQL"> </p> </div>

📖 Sobre o Projeto
O Doutor Agenda é uma plataforma SaaS robusta projetada para simplificar e automatizar o gerenciamento de clínicas médicas. A aplicação é multi-tenant, onde cada usuário (administrador) pode criar e gerenciar sua própria clínica.

A plataforma permite que administradores de clínicas cadastrem médicos (com horários de disponibilidade complexos), pacientes e gerenciem seus agendamentos de forma eficiente.

O projeto inclui um sistema completo de autenticação (Email/Senha e Google OAuth), integração de pagamentos para planos de assinatura com Stripe, e um dashboard analítico para acompanhar métricas vitais da clínica em tempo real.

✨ Principais Funcionalidades
A aplicação é rica em funcionalidades, todas construídas usando as práticas mais recentes do Next.js, como Server Actions e App Router.

Autenticação Completa:

Cadastro e login com Email/Senha e provedor Google OAuth.

Gerenciado pela biblioteca better-auth com um adaptador Drizzle.

Gerenciamento de Clínica (Multi-Tenancy):

Fluxo de onboarding onde novos usuários criam sua própria clínica.

Todos os dados principais (médicos, pacientes, agendamentos) são vinculados por clinicId, garantindo a separação dos dados.

A sessão do usuário é personalizada para incluir os dados da clínica ativa.

Sistema de Assinatura (Stripe):

Integração com Stripe para gerenciamento de planos (plano "Essential") e checkout.

Rota de API segura para Webhooks Stripe (/api/stripe/webhook).

Manipula o evento invoice.paid para atualizar o plano do usuário no banco de dados.

Manipula o evento customer.subscription.deleted para remover o plano do usuário.

Página de assinatura para o usuário gerenciar seu plano, com link para o Portal do Cliente Stripe.

Proteção de rotas que exigem uma assinatura ativa.

Dashboard Analítico:

Cards de estatísticas com (Faturamento total, Total de Agendamentos, Total de Pacientes, Total de Médicos).

Filtro de período (de/para) que atualiza todos os dados do dashboard.

Gráfico de Faturamento e Agendamentos (recharts) que exibe dados diários.

Ranking de "Top Médicos" e "Top Especialidades" com base no número de agendamentos.

Tabela com os agendamentos do dia.

Gestão de Médicos (CRUD):

CRUD completo para Médicos.

Cadastro de nome, especialidade (lista pré-definida) e preço da consulta.

Sistema de disponibilidade avançada, permitindo definir dias da semana (ex: Segunda a Sexta) e horários (ex: 08:00 às 18:00).

Gestão de Pacientes (CRUD):

CRUD completo para Pacientes.

Interface gerenciada por uma DataTable (TanStack Table).

Campos para nome, email, telefone (com máscara) e sexo.

Gestão de Agendamentos (CRUD):

CRUD completo para Agendamentos.

Agendamento Inteligente: O formulário de criação (upsert-appointment-form) busca horários disponíveis em tempo real.

Verificação de Disponibilidade: A Server Action getAvailableTimes verifica a disponibilidade do médico (dias da semana e horários) e cruza com os agendamentos já existentes para aquele dia, mostrando apenas os slots livres.

Utiliza TanStack Query (React Query) no cliente para buscar os horários disponíveis dinamicamente.

Arquitetura e UI:

Construído com Next.js App Router e Server Components.

Mutations de dados (CRUDs) são feitas com Server Actions.

Validação de schema em Server Actions usando next-safe-action e Zod.

UI moderna e responsiva construída com Shadcn/ui e Tailwind CSS.

🛠️ Tech Stack
As principais tecnologias utilizadas neste projeto são:

Framework: Next.js (App Router)

Linguagem: TypeScript

Banco de Dados: PostgreSQL

ORM: Drizzle ORM

Autenticação: Better Auth

Pagamentos: Stripe

UI: Tailwind CSS & Shadcn/ui

Formulários: React Hook Form & Zod

Server Actions: Next Safe Action

Estado (Cliente): TanStack Query (React Query)

Tabelas: TanStack Table

Gráficos: Recharts

Manipulação de Datas: Day.js

Estado da URL: Nuqs (para filtros do dashboard)

🚀 Como Rodar Localmente
Siga estas instruções para configurar e rodar o projeto em sua máquina local.

Pré-requisitos
Node.js (v18 ou superior)

npm (ou pnpm/yarn)

Uma instância do PostgreSQL rodando (localmente ou na nuvem, ex: Vercel Postgres, Supabase)

Uma conta Stripe para as chaves de API.

1. Instalação
   Clone o repositório:

Bash

git clone https://github.com/luanodias/doutor-agenda.git
cd doutor-agenda
Instale as dependências:

Bash

npm install 2. Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto. Você pode copiar o .env.example se ele existir, ou usar a estrutura abaixo.

Snippet de código

# Drizzle / Postgres

# Ex: postgresql://user:password@host:port/database

DATABASE_URL="SUA_URL_DO_POSTGRES"

# Better Auth (Google)

# Siga o guia: https://better-auth.dev/docs/getting-started/google

GOOGLE_CLIENT_ID="SEU_CLIENT_ID_DO_GOOGLE"
GOOGLE_CLIENT_SECRET="SEU_CLIENT_SECRET_DO_GOOGLE"

# Stripe

# Chaves do dashboard do Stripe

STRIPE_SECRET_KEY="sk_SEU_SECRET_KEY"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_SUA_PUBLISHABLE_KEY"

# ID do plano criado no Stripe (ex: price_1P...)

STRIPE_ESSENTIAL_PLAN_PRICE_ID="SEU_PRICE_ID_DO_PLANO"

# Segredo do Webhook (necessário para rodar o 'stripe listen')

# stripe listen --forward-to http://localhost:3000/api/stripe/webhook

STRIPE_WEBHOOK_SECRET="whsec_SEU_WEBHOOK_SECRET"

# URLs da Aplicação

NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="SEU_LINK_DO_PORTAL_DO_CLIENTE_STRIPE" 3. Banco de Dados
Execute as Migrações do Drizzle. Este comando irá sincronizar seu schema (src/db/schema.ts) com o banco de dados.

Bash

npx drizzle-kit push
Nota: drizzle-kit usará o dialeto postgresql conforme definido em drizzle.config.ts.

4. Rodando o Projeto
   Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra o navegador e acesse http://localhost:3000 para ver a aplicação funcionando!

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE (não fornecido nos arquivos, mas mencionado no README.md original) para mais detalhes.

👨‍💻 Autor
Feito com ❤️ por Luan Dias.

LinkedIn: https://www.linkedin.com/in/luan-de-oliveira-dias-944992193/
