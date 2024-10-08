const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
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

