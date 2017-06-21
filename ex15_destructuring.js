var pessoa = {
  nome: 'Deyves',
  idade: 20
};

var {nome, idade} = pessoa;

console.log(nome,idade);

var pessoa2 = {
  nome: 'Deyves',
  idade: 20,
  endereco: {rua: 'A', numero: 100}
};

var {nome, endereco:{rua, numero, cep }} = pessoa2;

console.log(nome,rua);


var value = Math.random() * (1000 - 900);

console.log(value);
console.log(Math.floor(value) + 900);
