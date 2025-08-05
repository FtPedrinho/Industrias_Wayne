document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica de Autenticação e Redirecionamento
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    // Verificação de acesso para a página de inventário
    if (window.location.pathname.includes('inventory.html')) {
        if (currentUser.role !== 'admin' && currentUser.role !== 'manager') {
            alert('Acesso negado. Você não tem permissão para acessar esta página.');
            window.location.href = 'dashboard.html';
            return;
        }
    }

    // 2. Lógica para o Navbar e Botão de Logout
    const userNameElement = document.getElementById('userName');
    const userRoleElement = document.getElementById('userRole');
    const logoutBtn = document.getElementById('logoutBtn');
    const navMenu = document.getElementById('navMenu');

    if (userNameElement && userRoleElement) {
        userNameElement.textContent = currentUser.username;
        userRoleElement.textContent = currentUser.role;
    }
    
    let navLinks = `<li><a href="dashboard.html">Dashboard</a></li>`;
    if (currentUser.role === 'admin' || currentUser.role === 'manager') {
        navLinks += `<li><a href="inventory.html">Inventário de Recursos</a></li>`;
    }
    if (navMenu) {
        navMenu.innerHTML = navLinks;
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // 3. Lógica específica para a página de Dashboard
    if (window.location.pathname.includes('dashboard.html')) {
        document.getElementById('welcomeTitle').textContent = `Bem-vindo, ${currentUser.username}!`;
        if (currentUser.role === 'admin' || currentUser.role === 'manager') {
            document.getElementById('adminSection').classList.remove('hidden');
            document.getElementById('employeeSection').classList.add('hidden');

            const resources = JSON.parse(localStorage.getItem('resources')) || [];
            document.getElementById('totalInventory').textContent = resources.length;
            const activeResources = resources.filter(res => res.status === 'ativo').length;
            document.getElementById('activeDevices').textContent = activeResources;
        } else {
            // Se for funcionário, mostra a seção de funcionários e esconde a de admin
            document.getElementById('employeeSection').classList.remove('hidden');
            document.getElementById('adminSection').classList.add('hidden');
        }
    }

    // 4. Lógica específica para a página de Inventário
    if (window.location.pathname.includes('inventory.html')) {
        const resourceForm = document.getElementById('resourceForm');
        const resourceTableBody = document.getElementById('resourceTableBody');
        const resourceIdInput = document.getElementById('resourceId');
        const submitBtn = document.getElementById('submitBtn');
        
        let resources = JSON.parse(localStorage.getItem('resources')) || [];

        function renderResources() {
            resourceTableBody.innerHTML = '';
            resources.forEach(res => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${res.id}</td>
                    <td>${res.name}</td>
                    <td>${res.type}</td>
                    <td>${res.status}</td>
                    <td class="action-buttons">
                        <button class="edit-btn" data-id="${res.id}">Editar</button>
                        <button class="delete-btn" data-id="${res.id}">Excluir</button>
                    </td>
                `;
                resourceTableBody.appendChild(row);
            });
            localStorage.setItem('resources', JSON.stringify(resources));
        }

        function clearForm() {
            resourceForm.reset();
            resourceIdInput.value = '';
            submitBtn.textContent = 'Adicionar Recurso';
            submitBtn.style.backgroundColor = '#007bff';
        }

        resourceForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('resourceName').value;
            const type = document.getElementById('resourceType').value;
            const status = document.getElementById('resourceStatus').value;
            const id = resourceIdInput.value ? parseInt(resourceIdInput.value) : Date.now();

            if (resourceIdInput.value) {
                // Atualizar recurso existente
                resources = resources.map(res => res.id === id ? { id, name, type, status } : res);
            } else {
                // Adicionar novo recurso
                resources.push({ id, name, type, status });
            }
            renderResources();
            clearForm();
        });

        resourceTableBody.addEventListener('click', (event) => {
            const target = event.target;
            const id = parseInt(target.dataset.id);
            if (target.classList.contains('delete-btn')) {
                if (confirm('Tem certeza que deseja excluir este recurso?')) {
                    resources = resources.filter(res => res.id !== id);
                    renderResources();
                }
            } else if (target.classList.contains('edit-btn')) {
                const resourceToEdit = resources.find(res => res.id === id);
                document.getElementById('resourceName').value = resourceToEdit.name;
                document.getElementById('resourceType').value = resourceToEdit.type;
                document.getElementById('resourceStatus').value = resourceToEdit.status;
                resourceIdInput.value = resourceToEdit.id;
                submitBtn.textContent = 'Salvar Alterações';
                submitBtn.style.backgroundColor = '#28a745';
            }
        });

        // Carrega os recursos ao entrar na página
        renderResources();
    }
});