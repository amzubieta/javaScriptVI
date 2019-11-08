const cepInput = document.getElementById("cep")
 

// Forma que hice la funcion 

const informacion = info => {
    document.getElementById("logradouro").value=(info.logradouro)
    document.getElementById("complemento").value=(info.complemento)
    document.getElementById("bairro").value=(info.bairro)
    document.getElementById("localidade").value=(info.localidade)
    document.getElementById("uf").value=(info.uf)  
    // console.log(info);
}

// preencheInputs = objeto =>{
//     logradouro.input
// }

//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs
            informacion(json)
            console.log(json);
            
        })
    }
})