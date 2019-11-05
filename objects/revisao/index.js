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

