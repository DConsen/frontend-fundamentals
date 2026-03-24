import { test, expect } from '@playwright/test'

test('Signup form', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await test.step('should fill personal information', async () => {
    await page.getByRole('textbox', { name: 'First name:' }).fill('John')
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe')
    await page
      .getByRole('textbox', { name: 'Email address:' })
      .fill('john.doe@example.com')
    await page
      .getByRole('textbox', { name: 'Phone number:' })
      .fill('06-12345678')
    await page
      .getByRole('textbox', { name: 'Date of birth:' })
      .fill('1996-04-21')
  })

  await test.step('should fill address', async () => {
    await page.getByRole('textbox', { name: 'Street:' }).fill('Street')
    await page.getByRole('textbox', { name: 'House number:' }).fill('12345')
    await page.getByRole('textbox', { name: 'Postal code:' }).fill('1234AB')
    await page.getByRole('textbox', { name: 'City:' }).fill('City')
    await page.getByRole('textbox', { name: 'Country' }).fill('Country')
  })

  await test.step('should submit the form', async () => {
    await page.getByRole('button', { name: 'Submit' }).click()
  })
})
