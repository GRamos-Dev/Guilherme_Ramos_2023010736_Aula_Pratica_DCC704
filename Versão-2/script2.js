document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-mensagem');
    const mensagem = document.getElementById('mensagem-secreta');

    if (botao && mensagem) {
        botao.addEventListener('click', () => {
            const estaExpandido = botao.getAttribute('aria-expanded') === 'true';

            botao.setAttribute('aria-expanded', String(!estaExpandido));
            mensagem.hidden = estaExpandido;
            botao.textContent = estaExpandido ? 'Revelar palavra do dia' : 'Ocultar palavra do dia';
        });
    }
});
