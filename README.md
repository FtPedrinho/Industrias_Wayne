# Industrias_Wayne
Esta documentação descreve o projeto final, um protótipo de sistema web para gerenciamento de segurança e recursos das Indústrias Wayne.

1. Funcionalidades Principais
Sistema de Autenticação e Autorização: O acesso é controlado por diferentes perfis de usuário (admin, manager, employee), garantindo que cada pessoa veja apenas o conteúdo e as funcionalidades permitidas para o seu cargo.

Dashboard Personalizado: A página inicial se adapta automaticamente ao perfil do usuário. Administradores e gerentes visualizam um resumo da segurança e do inventário, enquanto funcionários têm acesso a uma central de comunicação interna.

Gerenciamento de Recursos (Inventário): Uma interface completa para operações de CRUD (Criar, Ler, Atualizar e Deletar) de equipamentos, acessível apenas para usuários com permissões de gerenciamento.

Design Unificado e Profissional: A interface utiliza uma paleta de cores consistente e um estilo de fonte padronizado, resultando em uma experiência de usuário limpa e profissional.

2. Tecnologias Utilizadas
HTML5: Estrutura das páginas web.

CSS3: Estilo e layout, com design responsivo.

JavaScript (Vanilla): Lógica de front-end para gerenciar a autenticação e a interação com o inventário.

localStorage: Atua como um banco de dados local para armazenar dados de usuários e inventário, permitindo que a aplicação funcione como um protótipo "full-stack" sem a necessidade de um servidor.

3. Estrutura de Arquivos
O projeto está organizado da seguinte forma:

/wayne-industries-app/
├── index.html         (Página de Login)
├── dashboard.html     (Página inicial após o login)
├── inventory.html     (Gerenciamento de recursos)
├── css/
│   └── style.css      (Estilos unificados para todo o projeto)
└── js/
    ├── auth.js        (Lógica de login e registro inicial de usuários)
    └── main.js        (Lógica principal para navegação, dashboard e CRUD de inventário)
4. Como Usar a Aplicação
Para utilizar a aplicação, siga estes passos:

Abra o arquivo index.html no seu navegador (Google Chrome, Firefox, etc.).

Na tela de login, utilize uma das credenciais abaixo. A aplicação irá criar automaticamente os usuários no seu navegador na primeira vez que você acessá-la.

Após o login, você será direcionado para o dashboard, que se ajustará ao seu perfil de usuário.

Credenciais de Login
Administrador:

Usuário: bruce.wayne

Senha: password123

Gerente:

Usuário: alfred.pennyworth

Senha: password456

Funcionário:

Usuário: john.doe

Senha: password789

5. Explicação do Código
js/auth.js: Este script gerencia o processo de login. Ele verifica as credenciais, define o usuário atual no localStorage e redireciona para o dashboard.

js/main.js: Este é o coração do projeto. Ele controla a navegação, exibe o conteúdo certo no dashboard com base no papel do usuário e gerencia todas as funcionalidades de adicionar, editar e excluir itens no inventário.

css/style.css: Este arquivo centraliza todas as regras de estilo. Ele garante que os botões, títulos, cards e formulários tenham uma aparência consistente em todas as páginas, criando uma identidade visual profissional.
