import { test, expect } from "@playwright/test";

test("deve preencher, enviar e limpar o formulário", async ({ page }) => {
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

test("deve preencher todos os campos, enviar e limpar o formulário", async ({ page }) => {
  await page.goto("/formularios");

  await page.getByLabel("Nome completo").fill("Maria Silva");
  await page.getByLabel("E-mail").fill("maria@teste.com");
  await page.getByLabel("Empresa").fill("Acme Ltda");
  await page.getByLabel("Cargo").fill("Analista QA");
  await page.getByLabel("Telefone").fill("(11) 99999-9999");
  await page.getByLabel("Observações").fill("Teste de preenchimento completo.");

  await page.getByLabel("Aceito receber comunicações").check();
  await page.getByLabel("Quero receber atualizações do teste").check();

  await expect(page.getByLabel("Nome completo")).toHaveValue("Maria Silva");
  await expect(page.getByLabel("E-mail")).toHaveValue("maria@teste.com");
  await expect(page.getByLabel("Empresa")).toHaveValue("Acme Ltda");
  await expect(page.getByLabel("Cargo")).toHaveValue("Analista QA");
  await expect(page.getByLabel("Telefone")).toHaveValue("(11) 99999-9999");
  await expect(page.getByLabel("Observações")).toHaveValue("Teste de preenchimento completo.");

  await page.getByRole("button", { name: "Enviar" }).click();

  await page.getByRole("button", { name: "Limpar" }).click();

  await expect(page.getByLabel("Nome completo")).toHaveValue("");
  await expect(page.getByLabel("E-mail")).toHaveValue("");
  await expect(page.getByLabel("Empresa")).toHaveValue("");
  await expect(page.getByLabel("Cargo")).toHaveValue("");
  await expect(page.getByLabel("Telefone")).toHaveValue("");
  await expect(page.getByLabel("Observações")).toHaveValue("");
});
