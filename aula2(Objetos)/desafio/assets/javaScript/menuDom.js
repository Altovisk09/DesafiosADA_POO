document.addEventListener("DOMContentLoaded", () => {
    const menuOptions = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('main section');

    // Exibir a seção "home" por padrão
    sections.forEach(section => {
        if (section.id === 'home') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    menuOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();

            // Obtém o ID da seção correspondente ao item de menu clicado
            const targetId = option.getAttribute('id').replace('menu-', '');

            // Percorre todas as seções e exibe apenas a seção correspondente ao item de menu clicado
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
        });
    });
});
