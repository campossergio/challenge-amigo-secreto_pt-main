/** 
 * CHALLENGE AMIGO SECRETO - PRIMEIRO DESAFIO DE CÓDIGO
 * PROGRAMA ONE ORACLE NEXT EDUCATION E ALURA LATAM
 * INICIANTE EM PROGRAMAÇÃO G8 - ONE
 */

// Criação de um array vazio para armazenar os participantes do Amigo Secreto
let participantes = [];

// Função para adicionar participantes ao array
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    
    // Verificar se o campo de texto está preenchido
    if (amigo !== '') {
        //Adicionar o nome do amigo ao array de participantes
        participantes.push(amigo);
        //Limpar o campo de texto
        document.querySelector('input').value = '';
        //Exibir a lista de participantes
        document.getElementById('listaAmigos').innerHTML = '';
        exibirAmigos();
    } else {
        alert('Digite o nome do amigo!');
    }
    console.log(participantes);
}

// Chamar a função adicionarAmigo() ao clicar no botão
document.querySelector('button').addEventListener('click', adicionarAmigo());

// lista de exibição de amigos
function exibirAmigos() {
    let amigos = document.getElementById('listaAmigos');
    for (let i = 0; i < participantes.length; i++) {
        //console.log(participantes[i]);
        amigos.innerHTML += `<li>${participantes[i]}</li>`;
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (participantes.length > 0) {
        // Sortear um índice aleatório do array de participantes
        let indiceSorteado = Math.floor(Math.random() * participantes.length);
        let amigoSorteado = participantes[indiceSorteado];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    } else {
        alert('Adicione amigos para sortear!');
    }
}

// Chamar a função sortearAmigos() ao clicar no botão
document.querySelector('button').addEventListener('click', sortearAmigo());

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    participantes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}





