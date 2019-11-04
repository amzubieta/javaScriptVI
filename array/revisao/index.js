const comidas = ['Lasanha','Batata', 'Bacon']
console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
  console.log(`Na posicao ${posicao} temos a comida; ${comida}`)
});

//concat hace una copia del array y adiciona el elemento que queremos pasar

let outrasComidas = comidas.concat("Jiló")
console.log('comidas',comidas)
console.log('outras comidas', outrasComidas)

// Join crea un string de un array y usa el argumento como separador

let stringDoArray = comidas.join(',')
console.log(stringDoArray)

// Shift coge el primer valor del array y lo saca. Retorna el array sin el primer valor.

console.log(comidas.shift())
console.log(comidas)

//Pop Remueve el ultimo item del array y retorna el array sin el ultimo valor

console.log(comidas.pop());
console.log(comidas);


console.log(comidas.unshift("macarrao"));
console.log(comidas);

//Adiciona un iten en la ultima posicion

console.log(comidas.push("strogonofi"));
console.log(comidas);

//Invierte el array

console.log(comidas.reverse);
console.log(comidas);


let cortarAlimentos = comidas.slice(1,2)
console.log(cortarAlimentos)
console.log(comidas)

comidas.splice(1,0, 'alface')
console.log(comidas);

comidas.sort()
console.log(comidas);

comidas.unshift("Batata")
console.log(comidas);
console.log(comidas.indexOf("Batata"));
console.log(comidas.lastIndexOf("Batata"));
console.log(comidas.indexOf("Brocolis"));

let mapArray = comidas.map((comida)=> `${comida} Gostosa`)
console.log(mapArray);

let teste = comidas.forEach((comida)=>`${comida}boa`)
console.log(teste);

const numeros = [1, 2, 3, 4, 5]
let numerosDobrados = numeros.map((numero)=>numero*2)
console.log(numerosDobrados);

let arrayProcura = comidas.filter((comida)=>comida === 'Batata')
console.log(arrayProcura);

let somaNumero = numeros.reduce((esq, dir)=>{
    return esq + dir;
})
console.log(somaNumero);

console.log(numeros);
console.log(numeros.find(numero=>numero===1));
console.log(numeros.findIndex(numero => numero === 1));

console.log(numeros.find(numero => numero===-1));
console.log(numeros.findIndex(numero => numero === 9));


menorQueDez = (algunValor)=> algunValor<10
console.log(numeros.every(numero=>));





























