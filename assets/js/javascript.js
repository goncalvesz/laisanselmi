document.addEventListener('DOMContentLoaded', function () {
    var portfolioLinks = document.querySelectorAll('.portfolio-link');
    var modals = document.querySelectorAll('.modal');
    var makeButton = document.querySelector('.habmake');
    var teatroButton = document.querySelector('.habteatro');
    var makeItems = document.querySelector('.maquiagem');
    var teatroItems = document.querySelector('.atuacoes');
  
    // Evento para abrir modais
    portfolioLinks.forEach(function(link, index) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            modals[index].style.display = "block";
        });
    });
  
    // Evento para fechar modais ao clicar fora deles
    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
  
    // Função para mostrar maquiagem e esconder teatro
    makeButton.addEventListener('click', function() {
        makeButton.classList.add('ativo');
        teatroButton.classList.remove('ativo');
        makeItems.style.display = "flex";
        teatroItems.style.display = "none";
    });
  
    // Função para mostrar teatro e esconder maquiagem
    teatroButton.addEventListener('click', function() {
        teatroButton.classList.add('ativo');
        makeButton.classList.remove('ativo');
        makeItems.style.display = "none";
        teatroItems.style.display = "flex";
    });
  });