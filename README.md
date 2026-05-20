# Projeto de POC para Playwright

Este repositório é uma base genérica para avaliar, na prática, se o Playwright faz sentido no projeto principal.

A proposta não é simular um produto final, e sim oferecer várias telas com layouts diferentes, conteúdo suficiente e navegação fixa no topo para que os testes tenham superfícies reais de interação.

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

Abra http://localhost:3000 para navegar pelas páginas.

## Testes E2E com Playwright

Os comandos abaixo ajudam a executar os testes do projeto:

- `npm run test:e2e`  
  Executa todos os testes em modo headless, que é o modo padrão para validação automatizada.

- `npm run test:e2e:headed`  
  Executa os testes com o navegador visível, útil para depurar cliques, navegação e seletores.

- `npm run test:e2e:ui`  
  Abre a interface interativa do Playwright para explorar os testes manualmente.

- `npm run test:e2e:report`  
  Abre o relatório HTML gerado pelos testes anteriores.

## Observação

O Playwright já está adicionado como dependência de desenvolvimento, e a base da POC continua focada em validação manual e futura automação.
