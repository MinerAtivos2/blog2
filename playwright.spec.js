
import { test, expect } from '@playwright/test';

test('Verifica a renderização dos posts', async ({ page }) => {
  // Testa o post existente com HTML direto (ID 3)
  await page.goto('http://localhost:8080/post/3');
  await page.waitForTimeout(2000); // Aguarda a renderização completa
  await page.screenshot({ path: 'screenshot-post-3.png' });
  console.log('Screenshot do post 3 capturada.');

  // Testa o novo post de exemplo (ID 4)
  await page.goto('http://localhost:8080/post/4');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot-post-4.png' });
  console.log('Screenshot do post 4 capturada.');

  // Testa o post com iframe (ID 1)
  await page.goto('http://localhost:8080/post/1');
  await page.waitForTimeout(3000); // Iframe pode demorar um pouco mais para carregar
  await page.screenshot({ path: 'screenshot-post-1.png' });
  console.log('Screenshot do post 1 capturada.');
});
