const nomes = [];



const nomesPessoas = ['alberto','pedro','darquio','rafa'];



//adicionando novos elementos á array
//nomes.push('Pedro santos');
//console.log(nomes);

nomes.push('edmar');

//console.log(nomes);

nomes.push(2);

//console.log(nomes);

//////////
const idades = [1,23,92,8,58,20,87,22,36,60];

//console.log(idades[]);


//iterar um array

for (let index =0; index < idades.length; index++ ){
    console.log(idades[index]);
}

idades.forEach(function(value,index,idades){
    console.log(value,index,idades);
    
})