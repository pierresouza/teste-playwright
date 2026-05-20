# Projeto de POC para Playwright

Este repositório serve como base genérica para avaliar, na prática, se o Playwright faz sentido para testes no projeto principal.

A ideia aqui não é entregar uma aplicação de negócio, e sim uma coleção de telas com layouts diferentes, conteúdo suficiente e navegação fixa no topo para simular fluxos reais de uso.

## Objetivo

- Validar a experiência de automação com Playwright em uma aplicação Next.js realista.
- Testar cliques, navegação entre rotas, rolagem, leitura de conteúdo e preenchimento de formulários.
- Servir como laboratório antes de levar a abordagem para o projeto principal.

## Páginas disponíveis

- `/` - hub inicial com links para as demais rotas.
- `/dashboard` - painel com métricas, barras e atividade recente.
- `/catalogo` - grid de cards com filtros e destaque visual.
- `/formularios` - tela focada em inputs, checkbox e envio.
- `/timeline` - linha do tempo vertical com etapas sequenciais.
- `/suporte` - FAQ, status e cards de contato.

## Como executar

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para navegar pelas páginas.

## Observação

O Playwright ainda não foi instalado neste projeto. A estrutura foi preparada apenas para a POC e para ajudar na decisão futura sobre adoção no sistema principal.
