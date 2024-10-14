// Função para obter a data de hoje no formato YYYY-MM-DD
function getTodayDate() {
    let today = new Date();
    return today.toISOString().split('T')[0];
}

// Recupera o progresso atual e a última data de atualização do localStorage
let progress = localStorage.getItem('progress') ? parseInt(localStorage.getItem('progress')) : 0;
let lastUpdate = localStorage.getItem('lastUpdate');

// Define o progresso máximo como 100%
let progressBar = document.getElementById('progress-bar');
let progressValue = document.getElementById('progress-value');

// Atualiza a barra de progresso e o texto
function updateProgress() {
    progressBar.style.width = progress + '%';
    progressValue.textContent = progress + '%';
}

// Se a data de hoje for diferente da última data de atualização, avança 5%
let today = getTodayDate();
if (lastUpdate !== today && progress < 100) {
    progress += 5;
    localStorage.setItem('progress', progress);
    localStorage.setItem('lastUpdate', today);
}

// Chama a função para atualizar a barra
updateProgress();
