import { test, expect } from "@playwright/test";

test("deve clicar no filtro novos do catalogo", async ({ page }) => {
  await page.goto("/catalogo");

  const botao = page.getByRole("button", { name: "Novos" });

  await expect(botao).toBeVisible();
  await botao.click();
  await expect(botao).toHaveClass(/bg-slate-950/);
});
