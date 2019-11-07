const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('cards')


// Si los cards no llegaran a cargar, esto es el mensaje que va a salir
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem Descrição",
    imagem:"http://via.placeholder.com/250x250",
    link:"http://www.astrolink.com.br",
}


renderizaCarta = carta =>{
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML=novaCarta
}

// fetch('tarot.json').then(response => {
//     return response.json()
// }).then(json=>{
//     console.log(json)
//     renderizaCarta(selecionaCartaAleatoria(json)
// })

selecionaCartaAleatoria=cartas=>{
    let numeroAleatoria = Math.floor(Math.random)*cartas.length()
    return cartas
}

// Tranformar el fetch en un async await
async function carregaCartas() {
    const response = await fetch('tarot.json')
    const json = await response.json()
}

carregaCartas()

novaCarta=()=>{
    carregaCartas();
}

//Cuando no cargue pondremos un catch con una iformacion fija