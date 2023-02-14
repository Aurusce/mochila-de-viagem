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
    const existe = itens.find( elemento => elemento.nome === nomeDoObjeto.value)
    const itemAtual = {
    "nome": nomeDoObjeto.value,
    "quantidade": quantidadeDoObjeto.value,
    }
    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual);
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id +1: 0;
        criaElemento(itemAtual)
        itens.push(itemAtual)
    } 
    localStorage.setItem("itens",JSON.stringify(itens))
    nomeDoObjeto.value = ""
    quantidadeDoObjeto.value = "" 
})

function criaElemento(item) {
    const novoElemento = document.createElement('li')
    const numeroElemento = document.createElement('strong')
    novoElemento.classList.add("item")
    numeroElemento.innerHTML = item.quantidade
    numeroElemento.dataset.id = item.id
    novoElemento.appendChild(numeroElemento)
    novoElemento.innerHTML += item.nome
    listanoHTML.appendChild(novoElemento)
    novoElemento.appendChild(botaoDeleta(item.id))
}
function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"
    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode,id);
    })
    return elementoBotao
}
function deletaElemento(alvo,id) {
    alvo.remove()
    itens.splice(itens.findIndex(elemento => elemento.id === id),1)
    localStorage.setItem("itens",JSON.stringify(itens))
}
