const formAdicionaItem = document.getElementById("novoItem")
const listanoHTML = document.getElementById("lista")
formAdicionaItem.addEventListener('submit', (evento) => {
    evento.preventDefault();
    nomeDoObjeto = evento.target.elements['nome'].value
    quantidadeDoObjeto = evento.target.elements['quantidade'].value
    criaElemento(nomeDoObjeto, quantidadeDoObjeto)

})

function criaElemento(nomeDoElemento, quantidadeDoElemento) {
    const novoElemento = document.createElement('li')
    novoElemento.classList.add("item")
    const numeroElemento = document.createElement('strong')
    numeroElemento.innerHTML = quantidadeDoElemento
    novoElemento.appendChild(numeroElemento)
    novoElemento.innerHTML += nomeDoElemento
    listanoHTML.appendChild(novoElemento)
}