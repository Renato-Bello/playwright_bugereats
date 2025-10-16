import { link } from 'fs';
import { test, expect } from '../fixtures/test-base';
import { BasePage } from './BasePage';

export class CadastroPage extends BasePage {

  async acessarFormularioCadastro() {
    await this.page.getByRole('link', { name: 'Cadastre-se para fazer entregas' }).click();

  }

  async inserirDadosPessoais(nomeCompleto: string, cpf: string, email: string, whatsapp: string) {
    await this.fill("input[name='name']", nomeCompleto);
    await this.fill("input[name='cpf']", cpf);
    await this.fill("input[name='email']", email);
    await this.fill("input[name='whatsapp']", whatsapp);

  }

  async buscarCep(cep: string) {
    await this.fill("input[name='postalcode']", cep);
    await this.clickByRole("button", "Buscar CEP");


  }

  async validarDadosCep(rua: string, bairro: string, cidadeUf: string) {
    const inputRua = this.page.locator('input[name="address"]');
    const inputBairro = this.page.locator('input[name="district"]');
    const inputCidadeUf = this.page.locator('input[name="city-uf"]');

    await expect(inputRua).toHaveValue(rua);
    await expect(inputBairro).toHaveValue(bairro);
    await expect(inputCidadeUf).toHaveValue(cidadeUf);

  }

  async inserirDadosEndereco(numero: string, complemento: string) {
    await this.fill("input[name='address-number']", numero);
    await this.fill("input[name='address-details']", complemento);

  }

  async inserirMetodoEntrega(metodo: string) {
    const metodoLower = metodo.toLowerCase()

    if (metodoLower.includes('moto')) {
      await this.page.locator('ul.delivery-method li span:text("Moto")').click()
    } else if (metodoLower.includes('bicicleta')) {
      await this.page.locator('ul.delivery-method li span:text("Bicicleta")').click()
    } else if (metodoLower.includes('van')) {
      await this.page.locator('ul.delivery-method li span:text("Van/Carro")').click()
    } else {
      throw new Error(`Método de entrega "${metodo}" não reconhecido.`)
    }

  }

  async anexarCnh(nomeArquivo: string = 'CNH2.jpg') {
    const caminhoArquivo = `tests/fixtures/${nomeArquivo}`

    const inputUpload = this.page.locator('input[type="file"]')

    await inputUpload.setInputFiles(caminhoArquivo)


  }

  async clicarEmCadastrar() {
    await this.clickByRole("button", "Cadastre-se para fazer entregas");
  }

  async validarMsgCadastroRealizado(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgNomeBranco(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgCpfBrancoOuIncorreto(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgEmailBrancoOuIncorreto(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarEmailIncorreto(esperado: string | RegExp, seletor: string = 'input[type="email"], input[name="email"]') {
    const emailInput = await this.page.locator(seletor);
    const msg = await emailInput.evaluate((el: HTMLInputElement) => {
      el.reportValidity();
      return el.validationMessage;
    });

    if (esperado instanceof RegExp) {
      expect(msg).toMatch(esperado);
    } else {
      expect(msg).toContain(esperado);
    }
  }

  async validarMsgCepBrancoOuIncorreto(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgNumeroBranco(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgMetodoBranco(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }

  async validarMsgCnhBranco(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }
}