# 🧪 Playwright Buger Eats Automation

Este projeto automatiza o fluxo de **cadastro de entregadores** do site [Buger Eats](https://buger-eats.vercel.app/), utilizando o framework **Playwright** com **TypeScript**.

---

## 🚀 Tecnologias Utilizadas

- **Playwright** (v1.56.0)  
- **TypeScript**  
- **Node.js** (>=18)  
- **Page Object Model (POM)**  
- **Fixtures personalizadas** para reaproveitamento de páginas

---

## 📂 Estrutura do Projeto

```
playwright_bugereats/
├── tests/
│   ├── fixtures/
│   │   ├── test-base.ts        # Criação de fixtures (BasePage e CadastroPage)
│   │   └── CNH2.jpg            # Imagem utilizada no upload
│   ├── pages/
│   │   ├── BasePage.ts         # Métodos genéricos e utilitários
│   │   └── CadastroPage.ts     # Ações e validações específicas da tela de cadastro
│   └── specs/
│       └── cadastro.spec.ts    # Cenários de teste automatizados
├── playwright.config.ts        # Configurações do Playwright
├── package.json                # Dependências e scripts
└── .gitignore
```

---

## 🧭 Cenários Automatizados

- ✅ Cadastro com **Moto**, **Bicicleta** e **Van**  
- ⚠️ Cadastro com **campos obrigatórios em branco**  
- ❌ Cadastro com **CPF, e-mail ou CEP inválidos**  
- 📎 Validação de upload de **CNH**

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Executar todos os testes
```bash
npx playwright test
```

### 3️⃣ Executar com interface interativa
```bash
npx playwright test --ui
```

### 4️⃣ Gerar e visualizar relatório
```bash
npx playwright show-report
```

---

## 🌐 Configurações Importantes

O projeto está configurado para rodar nos principais navegadores:

```ts
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
]
```

Idioma e base URL:
```ts
use: {
  baseURL: 'https://buger-eats.vercel.app/',
  trace: 'on-first-retry'
}
```

---

## 🧩 Estrutura de Testes

Os testes seguem o padrão **Page Object Model**, organizando ações e validações por página.  
As **fixtures** em `test-base.ts` injetam automaticamente `BasePage` e `CadastroPage` em cada teste, facilitando o reuso.

---

## 👨‍💻 Autor

**Renato Stabelino Dal Bello**  
📍 São Paulo - SP  
🔗 [LinkedIn](https://www.linkedin.com/in/renato-bello/)

---
🧠 Projeto criado para estudos e aprimoramento em automação de testes com Playwright.
