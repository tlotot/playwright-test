import { test, expect } from '@playwright/test';

test('Navigation items', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();

  const menu = page.getByRole('button', { name: 'Node.js' });
  //await page.getByRole('button', { name: 'Node.js' }).hover();
  await menu.hover();

  const dropdownMenu = page.locator('ul.dropdown__menu');

  await expect(dropdownMenu).toBeVisible();

  await expect(dropdownMenu.getByRole('link', { name: 'Node.js' })).toBeVisible();
  await expect(dropdownMenu.getByRole('link', { name: 'Python' })).toBeVisible();
  await expect(dropdownMenu.getByRole('link', { name: 'Java' })).toBeVisible();
  await expect(dropdownMenu.getByRole('link', { name: '.NET' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('Elements names verification', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'API', exact: true })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});

test('Link verification', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API', exact: true })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );
  await expect(page.getByRole('button', { name: 'Node.js' })).toHaveAttribute('href', '#');
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
});

test('light mode is switching correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const modeButton = page.getByRole('button', { name: 'Switch between dark and light' });
  const locatorModeAttr = page.locator('html');

  await expect(modeButton).toHaveAttribute('title', 'system mode');
  await expect(modeButton).toHaveAttribute(
    'aria-label',
    'Switch between dark and light mode (currently system mode)',
  );
  await expect(locatorModeAttr).toHaveAttribute('data-theme', 'light');

  await modeButton.click();

  await expect(modeButton).toHaveAttribute('title', 'light mode');
  await expect(modeButton).toHaveAttribute(
    'aria-label',
    'Switch between dark and light mode (currently light mode)',
  );

  await modeButton.click();

  await expect(modeButton).toHaveAttribute('title', 'dark mode');
  await expect(modeButton).toHaveAttribute(
    'aria-label',
    'Switch between dark and light mode (currently dark mode)',
  );

  await modeButton.click();

  await expect(modeButton).toHaveAttribute('title', 'system mode');
  await expect(modeButton).toHaveAttribute(
    'aria-label',
    'Switch between dark and light mode (currently system mode)',
  );
});

test('Title verification', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});

test('Button Get Started verification', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute(
    'href',
    '/docs/intro',
  );
});
