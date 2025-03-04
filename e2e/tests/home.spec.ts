import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Hello, Next.js!");
});

test("has cats", async ({ page }) => {
  await page.goto("/");

  const listitem = page.getByRole("list").getByRole("listitem");
  await expect(listitem.getByText("name: Kitty")).toBeVisible();
  await expect(listitem.getByText("age: 1")).toBeVisible();
});
