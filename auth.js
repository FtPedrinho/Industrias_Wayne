document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Inicializa a base de dados de usuários no localStorage se ela não existir
    if (!localStorage.getItem('users')) {
        const users = [
            { username: 'bruce.wayne', password: 'password123', role: 'admin' },
            { username: 'alfred.pennyworth', password: 'password456', role: 'manager' },
            { username: 'john.doe', password: 'password789', role: 'employee' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

        if (user) {
            // Autenticação bem-sucedida
            localStorage.setItem('currentUser', JSON.stringify(user));
            messageDiv.textContent = 'Login bem-sucedido!';
            messageDiv.className = 'message success';
            
            // Redireciona para o dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Falha na autenticação
            messageDiv.textContent = 'Usuário ou senha inválidos.';
            messageDiv.className = 'message error';
        }
    });
});