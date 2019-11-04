const nomesNoRole = ['Adriana','Adrielly','Aline','Ana','Angelica','Ba','Babs','Carolzinha','Carolzona','Cecilia','Daiana','Emanuelle','Jackeline','Jennifer','Josiane','Lia','Marcela','Monique','Priscilla Roiz Garcia','Priscilla Soares Alves','Raissa','Raquel','Romênia','Rosana','Simara','Simone','Talita','Telma','Thaís','Valdeniza']
// console.log(nomesNoRole);

const validacao = (nome)=>{
    if(nome.trim() === '') throw 'O campo está vazio'
}

const checaPressenca=nome=>{
    let estaNalista = nomesNoRole.find((presente)=>{
        return nome.toLowerCase() === presente.toLowerCase();
    })
    if (estaNaLista) {
        console.log('To na lista');
        return
    }
}

const formulario = document.getElementById("form-do-role");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault;

    let nomeMenina = document.getElementById("nome");
    let valorNomeMenina = nomeMenina.value;

    try {
        validacao(valorNomeMenina)
        checaPressenca(valorNomeMenina)
    } catch (error) {
        document.getElementById("status").innerHTML = erro 
    }

    // formulario.appendChild(valorNomeMenina);

    // const comparacao = nomesNoRole.find(m=>m===nomeMenina.value)
    // if (comparacao===nomeMenina.value) {
    //     alert(`Èstá no role ${nomeMenina.value}`)
    // } else {
    //     alert(`Não está no role ${nomeMenina.value}`)   
    // }
})

// const btn = document.getElementById("idBtn");
// formulario.appendChild(btn);

