import { expect, test } from "@playwright/test";

test.describe("rotas principais da POC", () => {
  test("home exibe o hub de navegação", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /base genérica com várias rotas/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Catálogo" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Formulários" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Timeline" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Suporte" })).toBeVisible();
  });

  test("dashboard renderiza KPIs e seções de suporte à análise", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page.getByRole("heading", { name: /um painel mais denso/i })).toBeVisible();
    await expect(page.getByText("Conversão")).toBeVisible();
    await expect(page.getByText("Ativos")).toBeVisible();
    await expect(page.getByText("Tendência semanal")).toBeVisible();
    await expect(page.getByText("Fila de aprovação")).toBeVisible();
  });

  test("catalogo permite interagir com o filtro Novos", async ({ page }) => {
    await page.goto("/catalogo");

    const botaoNovos = page.getByRole("button", { name: "Novos" });

    await expect(page.getByRole("heading", { name: /cards, filtros e destaque visual/i })).toBeVisible();
    await expect(botaoNovos).toBeVisible();
    await botaoNovos.click();
    await expect(page.getByRole("button", { name: "Todos" })).toBeVisible();
    await expect(page.locator("article")).toHaveCount(6);
  });

  test("formularios preenche, envia e limpa todos os campos", async ({ page }) => {
    await page.goto("/formularios");

    await page.getByLabel("Nome completo").fill("Maria Silva");
    await page.getByLabel("E-mail").fill("maria@teste.com");
    await page.getByLabel("Empresa").fill("Acme Ltda");
    await page.getByLabel("Cargo").fill("Analista QA");
    await page.getByLabel("Telefone").fill("(11) 99999-9999");
    await page.getByLabel("Observações").fill("Teste de preenchimento completo.");

    await page.getByLabel("Aceito receber comunicações").check();
    await page.getByLabel("Quero receber atualizações do teste").check();

    await page.getByRole("button", { name: "Enviar" }).click();
    await expect(page.getByRole("status")).toHaveText("Formulário enviado com sucesso.");

    await page.getByRole("button", { name: "Limpar" }).click();
    await expect(page.getByRole("status")).toHaveText("Campos limpos.");
    await expect(page.getByLabel("Nome completo")).toHaveValue("");
    await expect(page.getByLabel("E-mail")).toHaveValue("");
    await expect(page.getByLabel("Empresa")).toHaveValue("");
    await expect(page.getByLabel("Cargo")).toHaveValue("");
    await expect(page.getByLabel("Telefone")).toHaveValue("");
    await expect(page.getByLabel("Observações")).toHaveValue("");
    await expect(page.getByLabel("Aceito receber comunicações")).not.toBeChecked();
    await expect(page.getByLabel("Quero receber atualizações do teste")).not.toBeChecked();
  });

  test("timeline exibe a sequência de marcos", async ({ page }) => {
    await page.goto("/timeline");

    await expect(page.getByRole("heading", { name: /linha do tempo vertical/i })).toBeVisible();
    await expect(page.getByText("Descoberta")).toBeVisible();
    await expect(page.getByText("Prototipação")).toBeVisible();
    await expect(page.getByText("Cobertura")).toBeVisible();
    await expect(page.getByText("Escala")).toBeVisible();
    await expect(page.locator("article")).toHaveCount(4);
  });

  test("suporte expande uma faq e mostra o conteúdo", async ({ page }) => {
    await page.goto("/suporte");

    await expect(page.getByRole("heading", { name: /faq, status e cartões de contato/i })).toBeVisible();

    const faqComecar = page.getByText("Como começar?");
    await expect(faqComecar).toBeVisible();
    await faqComecar.click();

    await expect(page.getByText(/use o menu fixo/i)).toBeVisible();
  });
});
