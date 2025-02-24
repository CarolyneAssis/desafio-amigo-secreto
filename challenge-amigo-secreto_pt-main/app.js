//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
let botaoReiniciar = document.getElementById('reiniciar');
let botaoSortear = document.getElementById('sortear');

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um nome.');
        return false;
    } else {
        limparLista();
        listaAmigos.push(nomeDoAmigo); 
        let listaExibida = document.getElementById('listaAmigos');
        for (i = 0; i < listaAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaAmigos[i];
            listaExibida.appendChild(li);
        }
    }
    limparCampo();
    }

function sortearAmigo() {
    if (listaAmigos == '') {
        alert('Por favor, insira um nome.');
    } else {
        if (listaAmigos.length < 3) {
            alert('É necessário pelo menos 3 amigos para o sorteio.');
            return;
        }
        else{
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        listaAmigos = listaAmigos.filter(item => item !== amigoSecreto);
        resultado.innerHTML = `O amigo sorteado é: ${amigoSecreto}!`;
        limparLista();
        botaoReiniciar.removeAttribute('hidden');
        botaoSortear.setAttribute('hidden', 'hidden');
    }
}
}

function novoJogo() {
    document.getElementById('reiniciar');
    listaAmigos = [];
    resultado.innerHTML = '';
    botaoReiniciar.setAttribute('hidden', 'hidden');
    botaoSortear.removeAttribute('hidden');
    }

function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}

function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}