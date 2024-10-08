const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1800 }
];

// Primeira questão

const listaDeEmpresas = empresas.map((empresa) => (empresa.nome)) // Jairo
console.log(listaDeEmpresas); // Jairo

empresas.forEach((empresa)=>{ //Victor
    console.log(empresa.nome); //Victor
}); // Victor

const nomesMapeados = empresas.map(empresa => empresa.nome);
console.log(nomesMapeados)

// Segunda questão

const valoDaEmpresa = empresas.filter((empresa) => { // Davi
    if(empresa.valorDeMercado > 100){ // Davi
        console.log(empresa.nome) // Davi
        console.log(empresa.valorDeMercado) // Davi
    } // Davi
}) // Davi

const valoresMapeados = empresas.filter(empresa => empresa.valorDeMercado > 100);
console.log("\nEmpresas com valor de marcado superior a 100: ")
console.log(valoDaEmpresa);

const valor = empresas.filter(empresa => {  // Ryan
    return empresa.valorDeMercado > 100 // Ryan
}); // Ryan

console.log(valor) // Ryan

// Terceira questao


const valorDeMercadoTotal = empresas.reduce((accumulator, valor) => {
    return valor.valorDeMercado + accumulator
}, 0)

console.log(valorDeMercadoTotal)

let soma = 0;

empresas.forEach((empresa)=>{soma += empresa.valorDeMercado})
console.log(soma);


// Quarta questao

const empresaMaisAntiga = empresas.reduce((maisAntiga, empresa) => {
    return (empresa.anoDeCriacao < maisAntiga.anoDeCriacao) ? empresa : maisAntiga;
}, empresas[0]);
console.log(empresaMaisAntiga);

// Quinta questao

const nomes = [];
empresas.forEach(empresa => {
    nomes.push({
        nome: empresa.nome,
        ceo: empresa.CEO
    })
})

console.log(nomes);