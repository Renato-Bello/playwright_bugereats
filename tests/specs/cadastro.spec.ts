import { test, expect } from '../fixtures/test-base';
import { CadastroPage } from '../pages/CadastroPage';

test.describe('Cadastro', () => {
  test('cadastro com metodo moto realizado com sucesso', async ({ basePage, cadastroPage }) => {
    await basePage.goto('/');
    await cadastroPage.acessarFormularioCadastro();
    await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmail.com", "11988353046");
    await cadastroPage.buscarCep("05271200");
    await cadastroPage.validarDadosCep("Rua Luís Pereira Rebouças", "Jardim Santa Fé (Zona Oeste)", "São Paulo/SP");
    await cadastroPage.inserirDadosEndereco("255", "não possui");
    await cadastroPage.inserirMetodoEntrega("moto");
    await cadastroPage.anexarCnh();
    await cadastroPage.clicarEmCadastrar();
    await cadastroPage.validarMsgCadastroRealizado("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.");

  });

});

test('cadastro com metodo bicicleta realizado com sucesso', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmail.com", "11988353046");
  await cadastroPage.buscarCep("05271200");
  await cadastroPage.validarDadosCep("Rua Luís Pereira Rebouças", "Jardim Santa Fé (Zona Oeste)", "São Paulo/SP");
  await cadastroPage.inserirDadosEndereco("255", "não possui");
  await cadastroPage.inserirMetodoEntrega("bicicleta");
  await cadastroPage.anexarCnh();
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgCadastroRealizado("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.");

});

test('cadastro com metodo van realizado com sucesso', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmail.com", "11988353046");
  await cadastroPage.buscarCep("05271200");
  await cadastroPage.validarDadosCep("Rua Luís Pereira Rebouças", "Jardim Santa Fé (Zona Oeste)", "São Paulo/SP");
  await cadastroPage.inserirDadosEndereco("255", "não possui");
  await cadastroPage.inserirMetodoEntrega("van");
  await cadastroPage.anexarCnh();
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgCadastroRealizado("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.");

});

test('cadastro não realizado quando todos os dados obrigatórios estiverem em branco', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgNomeBranco("É necessário informar o nome");
  await cadastroPage.validarMsgCpfBrancoOuIncorreto("É necessário informar o CPF");
  await cadastroPage.validarMsgEmailBrancoOuIncorreto("É necessário informar o email");
  await cadastroPage.validarMsgCepBrancoOuIncorreto("É necessário informar o CEP");
  await cadastroPage.validarMsgNumeroBranco("É necessário informar o número do endereço");
  await cadastroPage.validarMsgMetodoBranco("Selecione o método de entrega");
  await cadastroPage.validarMsgCnhBranco("Adicione uma foto da sua CNH");
});

test('cadastro não realizado quando CPF estiver em branco ou inválido', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089", "rs-bello@hotmail.com", "11988353046");
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgCpfBrancoOuIncorreto("Oops! CPF inválido");

});

test('cadastro não realizado quando email estiver inválido', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bellohotmail.com", "11988353046");
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarEmailIncorreto("Please include an '@' in the email address. 'rs-bellohotmail.com' is missing an '@'.");
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmailcom", "11988353046");
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgEmailBrancoOuIncorreto("Oops! Email com formato inválido.");
});

test('cadastro não realizado quando CEP estiver em branco ou inválido', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmail.com", "11988353046");
  await cadastroPage.buscarCep("05412");
  await cadastroPage.validarMsgCepBrancoOuIncorreto("Informe um CEP válido");

});

test('cadastro não realizado quando CNH não for importada', async ({ basePage, cadastroPage }) => {
  await basePage.goto('/');
  await cadastroPage.acessarFormularioCadastro();
  await cadastroPage.inserirDadosPessoais("Renato Stabelino Dal Bello", "44670089854", "rs-bello@hotmail.com", "11988353046");
  await cadastroPage.buscarCep("05271200");
  await cadastroPage.validarDadosCep("Rua Luís Pereira Rebouças", "Jardim Santa Fé (Zona Oeste)", "São Paulo/SP");
  await cadastroPage.inserirDadosEndereco("255", "não possui");
  await cadastroPage.inserirMetodoEntrega("moto");
  await cadastroPage.clicarEmCadastrar();
  await cadastroPage.validarMsgCnhBranco("Adicione uma foto da sua CNH");

});


