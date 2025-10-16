import { test as base, expect, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { CadastroPage } from '../pages/CadastroPage';


type Fixtures = {
  basePage: BasePage;
  cadastroPage: CadastroPage;
};

export const test = base.extend<Fixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  cadastroPage: async ({ page }, use) => {
    await use(new CadastroPage(page));
  },
});

export { expect };