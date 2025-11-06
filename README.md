<div align="center">
<!-- Você pode substituir este H1 por sua logo se tiver uma -->
<h1 style="font-size: 3rem; font-weight: bold; border-bottom: none;">
Doutor Agenda
</h1>

<p>
<strong>Um sistema SaaS (Software as a Service) completo para gerenciamento de agendamentos em clínicas médicas.</strong>
</p>
<p>
Construído com as tecnologias mais modernas, incluindo Next.js, Drizzle, Stripe e Shadcn/ui.
</p>

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/github/license/luanodias/doutor-agenda%3Fstyle%3Dflat-square%26color%3Dblue" alt="Licença">
<img src="https://www.google.com/search?q=https://img.shields.io/github/last-commit/luanodias/doutor-agenda%3Fstyle%3Dflat-square%26color%3Dbrightgreen" alt="Último Commit">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Next.js-15-black%3Fstyle%3Dflat-square%26logo%3Dnextdotjs" alt="Next.js">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Drizzle-ORM-brightgreen%3Fstyle%3Dflat-square%26logo%3Ddrizzle" alt="Drizzle ORM">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Stripe-blueviolet%3Fstyle%3Dflat-square%26logo%3Dstripe" alt="Stripe">
</p>
</div>

<!-- Tópico "Preview da Aplicação" -->

📸 Preview da Aplicação

Aqui está uma prévia do dashboard principal do Doutor Agenda.

<!-- Substitua pela URL de uma imagem ou GIF do seu projeto -->

📋 Índice

Sobre o Projeto

✨ Principais Funcionalidades

🛠️ Tech Stack

🚀 Como Rodar Localmente

Pré-requisitos

Instalação

Variáveis de Ambiente

Banco de Dados

Rodando o Projeto

📄 Licença

👨‍💻 Autor

📖 Sobre o Projeto

O Doutor Agenda é uma plataforma SaaS robusta projetada para simplificar e automatizar o gerenciamento de clínicas médicas. A aplicação permite que administradores de clínicas cadastrem médicos, pacientes e gerenciem seus agendamentos de forma eficiente.

O projeto inclui um sistema completo de autenticação, integração de pagamentos para planos de assinatura com Stripe, e um dashboard analítico para acompanhar métricas vitais da clínica.

✨ Principais Funcionalidades

Autenticação Completa: Cadastro e login com Email/Senha e provedor Google OAuth (via better-auth).

Gerenciamento de Clínica: Fluxo de criação de clínica para novos usuários.

Sistema de Assinatura: Integração com Stripe para gerenciamento de planos (Essential) e checkout.

Webhooks Stripe: Rota de API segura para receber e processar eventos do Stripe (ex: invoice.paid, customer.subscription.deleted).

Dashboard Analítico:

Cards de estatísticas (Faturamento total, Agendamentos, Pacientes, Médicos).

Gráfico de faturamento e agendamentos por período.

Ranking de "Top Médicos" e "Top Especialidades".

Tabela de agendamentos do dia.

Gestão de Médicos (CRUD): Cadastro completo de médicos, incluindo especialidade, preço da consulta e horários de disponibilidade.

Gestão de Pacientes (CRUD): Cadastro de pacientes com informações de contato.

Gestão de Agendamentos (CRUD):

Sistema inteligente para criar agendamentos, mostrando apenas horários disponíveis.

Verificação de disponibilidade em tempo real (get-available-times).

UI Moderna e Responsiva: Construído com Shadcn/ui e Tailwind CSS.

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

Busca de Dados (Client): TanStack Query (React Query)

🚀 Como Rodar Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

Pré-requisitos

Node.js (v18 ou superior)

npm ou pnpm

Uma instância do PostgreSQL rodando (localmente ou na nuvem, ex: Vercel Postgres, Supabase)

Instalação

Clone o repositório:

git clone [https://github.com/luanodias/doutor-agenda.git](https://github.com/luanodias/doutor-agenda.git)
cd doutor-agenda

Instale as dependências:

npm install

# ou

# pnpm install

Variáveis de Ambiente

Configure seu .env:
Crie um arquivo .env na raiz do projeto, copiando o exemplo abaixo (.env.example).

# .env

# Drizzle / Postgres

# Ex: postgresql://user:password@host:port/database

DATABASE_URL="SUA_URL_DO_POSTGRES"

# Better Auth (Google)

# Siga o guia: [https://better-auth.dev/docs/getting-started/google](https://better-auth.dev/docs/getting-started/google)

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
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="SEU_LINK_DO_PORTAL_DO_CLIENTE_STRIPE"

Banco de Dados

Execute as Migrações do Drizzle:
Este comando irá sincronizar seu schema (src/db/schema.ts) com o banco de dados.

npx drizzle-kit push

Rodando o Projeto

Inicie o servidor de desenvolvimento:

npm run dev

Abra o navegador:
Acesse http://localhost:3000 e veja a aplicação funcionando!

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor

Feito com ❤️ por Luan Dias.

<!-- Adicione seus links -->

GitHub | LinkedIn
