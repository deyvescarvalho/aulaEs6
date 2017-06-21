var nome = 'Bia', anoNascimnto = 1990;

function idade() {
  return new Date().getFullYear() - anoNascimnto;
}

var Pessoa = {
  nome,
  anoNascimnto,
  idade,
  toString(){
    return `${nome} tem ${idade()} anos!`;
  }
}

console.log(Pessoa.toString());
