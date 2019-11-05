//nome, sobrenome, materia

function Professor(nome, sobrenome, materia) {
    this.nome=nome
    this.sobrenome=sobrenome
    this.materia=materia
}

Professor.prototype.dizMateria = function () {
    return `A materia é: ${this.materia}`
}

const js3 = new Professor("Cintia", "Fumi", "Javascript 3")
<<<<<<< HEAD
console.log(js3.dizMateria());
const js4 = new Professor("Lydia", "Rodrigues", "Javascript 4")
console.log(js4.dizMateria());

js4.dizMateria = function () {
    return `A professora é ${this.nome} e a materia ${this.materia}`
}
console.log(js4.dizMateria());

const avo={attr1:'A'}
const mae={_proto_:avo, attr2:'B', attr3:'E'}
const filha={_proto_:mae, attr3:'C'}
console.log(filha.attr1, filha.attr2, filha.attr3);

=======
console.log(js3.dizMateria())
const js4 = new Professor("Lydia", "Rodrigues", "Javascript 4")
console.log(js4.dizMateria())

js4.dizMateria = function(){
    return `A professora é: ${this.nome} e a materia é ${this.materia}`
}
console.log(js4.dizMateria())

const avo = { attr1: 'A'}
const mae = {__proto__:avo, attr2: 'B', attr3:'E'}
const filha = {__proto__:mae, attr3: 'C'}
console.log(filha.attr1, filha.attr2, filha.attr3)

class Avo {
    constructor(sobrenome = "Rodrigues"){
        this.sobrenome = sobrenome
    }
}

class Mae extends Avo {
    constructor(sobrenome, profissao="Cineasta"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filha extends Mae {
    constructor(){
        super('Silva')
    }
}

const novaFilha = new Filha
novaFilha.profissao = "Atriz"
console.log(novaFilha)
const novaMae = new Mae
console.log(novaMae)
>>>>>>> upstream/aula2
