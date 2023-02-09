const formAdicionaItem = document.getElementById("novoItem")
const listanoHTML = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) =>{
    criaElemento(elemento)
})

formAdicionaItem.addEventListener('submit', (evento) => {
    evento.preventDefault();
    nomeDoObjeto = evento.target.elements['nome']
    quantidadeDoObjeto = evento.target.elements['quantidade']
    const itemAtual = {
        "nome": nomeDoObjeto.value,
        "quantidade": quantidadeDoObjeto.value,
    }
    criaElemento(itemAtual)
    itens.push(itemAtual)
    localStorage.setItem("itens",JSON.stringify(itens))
    nomeDoObjeto.value = ""
    quantidadeDoObjeto.value = "" 
})

function criaElemento(item) {
    const novoElemento = document.createElement('li')
    const numeroElemento = document.createElement('strong')
    novoElemento.classList.add("item")
    numeroElemento.innerHTML = item.quantidade
    novoElemento.appendChild(numeroElemento)
    novoElemento.innerHTML += item.nome
    listanoHTML.appendChild(novoElemento)
}
