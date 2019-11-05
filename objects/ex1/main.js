class Botao{
    constructor(texto, cor, tamanho, icone){
        this.texto=texto
        this.cor=cor
        this.tamanho=tamanho
        this.icone=icone
    }
    denhaBotao(){
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute("class", `${this.cor}, ${this.tamanho}`)
        if(this.icone){
        // <i></i>
        const tagIcone=document.createElement("i")
        tagIcone.setAttribute("class",`fas ${this.icone}`)
        novoBotao.appendChild(tagIcone)
        const text = document.createTextNote(this.texto)
        novoBotao.appendChild(text)
        }
    }
}