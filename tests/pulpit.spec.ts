import { test, expect } from '@playwright/test';

test.describe('Pulpit tests', async () => {
    test('successful login with correct credentials', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('totototo');
        await page.getByTestId('password-input').click();
        await page.getByTestId('password-input').fill('fsdfsdfs');
        await page.getByTestId('login-button').click();
        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').click();
        await page.locator('#widget_1_transfer_amount').fill('130');
        await page.locator('#widget_1_transfer_amount').press('Enter');
        await page.locator('#widget_1_transfer_title').click();
        await page.locator('#widget_1_transfer_title').fill('Przelew');
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();
    });

});