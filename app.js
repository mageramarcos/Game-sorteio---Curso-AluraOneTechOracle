alert('Bem vindo ao jogo do numero secreto');
let numeroSecreto = 5;
let numeroChute = prompt('escolha um numero de 1 a 10');

if (numeroChute != numeroSecreto) {
    alert('Tente novamente! Voce errou!')
    location.reload(true);
}


