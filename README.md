# Projeto Wayne Industries

Um protótipo de sistema web de gerenciamento para as Indústrias Wayne, focado em controle de acesso, inventário de recursos e segurança. A aplicação simula um ambiente "full-stack" utilizando JavaScript e o `localStorage` do navegador para persistência de dados.

---

### 💻 Tecnologias

* **HTML5**: Estruturação das páginas.
* **CSS3**: Estilização e layout, com design responsivo.
* **JavaScript (Vanilla)**: Lógica de front-end, autenticação e manipulação do DOM.
* **`localStorage`**: Banco de dados temporário para armazenar usuários e dados do inventário.

---

### ✨ Funcionalidades

* **Autenticação**: Login de usuários com diferentes níveis de acesso (`admin`, `manager`, `employee`).
* **Dashboard Dinâmico**: A interface inicial se adapta ao perfil do usuário, exibindo informações relevantes para cada cargo.
* **Gerenciamento de Recursos**: Módulo completo de **CRUD** (Criar, Ler, Atualizar, Deletar) para gerenciar o inventário de dispositivos e equipamentos.
* **Design Unificado**: Uma interface de usuário limpa e profissional, com uma paleta de cores consistente e tipografia padronizada.

---

### 🚀 Como Rodar o Projeto

Este projeto não necessita de um servidor. Para executá-lo, siga estes passos simples:

1.  Clone este repositório ou baixe os arquivos do projeto.
2.  Abra o arquivo **`index.html`** em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

---

### 🔑 Credenciais de Acesso

O sistema já vem pré-configurado com três usuários. Utilize as credenciais abaixo para testar as diferentes funcionalidades da aplicação.

| Perfil      | Usuário               | Senha          | Permissões                                  |
|-------------|-----------------------|----------------|---------------------------------------------|
| **Admin** | `bruce.wayne`         | `password123`  | Dashboard + Inventário de Recursos          |
| **Gerente** | `alfred.pennyworth`   | `password456`  | Dashboard + Inventário de Recursos          |
| **Funcionário** | `john.doe`          | `password789`  | Apenas Dashboard de Comunicação Interna     |

---

### 📁 Estrutura de Arquivos

Com certeza! A documentação no formato README do GitHub é essencial para apresentar o projeto de forma profissional. Ele servirá como um guia completo para qualquer pessoa que queira entender e utilizar a aplicação.

Aqui está o código completo para o arquivo README.md. Você pode copiar e colar este conteúdo no seu projeto.

Código do README.md
Markdown

# Projeto Wayne Industries

![Logo Wayne Industries](https://i.imgur.com/uR7j2Jc.png)

Um protótipo de sistema web de gerenciamento para as Indústrias Wayne, focado em controle de acesso, inventário de recursos e segurança. A aplicação simula um ambiente "full-stack" utilizando JavaScript e o `localStorage` do navegador para persistência de dados.

---

### 💻 Tecnologias

* **HTML5**: Estruturação das páginas.
* **CSS3**: Estilização e layout, com design responsivo.
* **JavaScript (Vanilla)**: Lógica de front-end, autenticação e manipulação do DOM.
* **`localStorage`**: Banco de dados temporário para armazenar usuários e dados do inventário.

---

### ✨ Funcionalidades

* **Autenticação**: Login de usuários com diferentes níveis de acesso (`admin`, `manager`, `employee`).
* **Dashboard Dinâmico**: A interface inicial se adapta ao perfil do usuário, exibindo informações relevantes para cada cargo.
* **Gerenciamento de Recursos**: Módulo completo de **CRUD** (Criar, Ler, Atualizar, Deletar) para gerenciar o inventário de dispositivos e equipamentos.
* **Design Unificado**: Uma interface de usuário limpa e profissional, com uma paleta de cores consistente e tipografia padronizada.

---

### 🚀 Como Rodar o Projeto

Este projeto não necessita de um servidor. Para executá-lo, siga estes passos simples:

1.  Clone este repositório ou baixe os arquivos do projeto.
2.  Abra o arquivo **`index.html`** em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

---

### 🔑 Credenciais de Acesso

O sistema já vem pré-configurado com três usuários. Utilize as credenciais abaixo para testar as diferentes funcionalidades da aplicação.

| Perfil      | Usuário               | Senha          | Permissões                                  |
|-------------|-----------------------|----------------|---------------------------------------------|
| **Admin** | `bruce.wayne`         | `password123`  | Dashboard + Inventário de Recursos          |
| **Gerente** | `alfred.pennyworth`   | `password456`  | Dashboard + Inventário de Recursos          |
| **Funcionário** | `john.doe`          | `password789`  | Apenas Dashboard de Comunicação Interna     |

---

### 📁 Estrutura de Arquivos

/wayne-industries-app/
├── index.html         (Página de Login)
├── dashboard.html     (Página inicial após o login)
├── inventory.html     (Gerenciamento de recursos)
├── README.md          (Documentação do projeto)
├── css/
│   └── style.css      (Estilos globais unificados)
└── js/
├── auth.js        (Lógica de autenticação)
└── main.js        (Lógica de navegação e CRUD

---

### 🎨 Design e Interface

A aplicação segue uma identidade visual coesa com as seguintes características:

* **Tema Escuro**: Uma paleta de cores dominada por tons escuros (`#1a1a1a`, `#2a2a2a`) para uma interface moderna e de baixo contraste.
* **Cor de Destaque**: O amarelo (`#ffcc00`) é utilizado para títulos, elementos interativos e detalhes, criando um contraste marcante.
* **Tipografia**: A fonte `Courier New` é aplicada aos títulos, conferindo uma estética tecnológica e profissional.
* **Botões Padronizados**: Utiliza um sistema de botões com estilos unificados para ações primárias, secundárias e de risco.

---

### 🚀 Melhorias Futuras

* Implementação de um backend real com um banco de dados (ex: Node.js, Python, PHP).
* Adição de gráficos no dashboard para visualização de dados de inventário.
* Desenvolvimento de um sistema dinâmico para os "Alertas de Segurança".
* Melhorias de responsividade para uma experiência otimizada em dispositivos móveis.
