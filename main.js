const form = document.getElementById('form-contact');
const nomesContatos = [];
const numerosContatos = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numerosContatos.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já foi inserido.`);
    } else {
        numerosContatos.push(inputNumeroContato.value);
        nomesContatos.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}