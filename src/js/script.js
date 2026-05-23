const vinhos = [
  {
    nome: "Gabriel Flausino",
    tipo: "Tinto",
    safra: 2020,
    estoque: 10
  },

  {
    nome: "Lucas Silva",
    tipo: "Branco",
    safra: 2021,
    estoque: 3
  },

  {
    nome: "Felipe Kenji",
    tipo: "Tinto",
    safra: 2019,
    estoque: 7
  },

  {
    nome: "Kelso Oliveira",
    tipo: "Rosé",
    safra: 2022,
    estoque: 2
  }
];

function adicionarVinho(nome, tipo, safra, estoque) {

  const novoVinho = {
    nome: nome,
    tipo: tipo,
    safra: safra,
    estoque: estoque
  };

  vinhos.push(novoVinho);

  console.log(`Vinho ${nome} adicionado com sucesso!`);
}

function listarVinhos() {

  console.log("LISTA DE VINHOS:");

  vinhos.forEach((vinho, index) => {

    console.log(`
    ${index + 1} - Nome: ${vinho.nome}
    Tipo: ${vinho.tipo}
    Safra: ${vinho.safra}
    Estoque: ${vinho.estoque}
    `);

  });

}

function mostrarEstoqueBaixo() {

  const estoqueBaixo = vinhos.filter(vinho => vinho.estoque < 5);

  console.log("VINHOS COM ESTOQUE BAIXO:");

  estoqueBaixo.forEach(vinho => {
    console.log(`${vinho.nome} - Estoque: ${vinho.estoque}`);
  });

}

function calcularEstoqueTotal() {

  const estoqueTotal = vinhos.reduce((total, vinho) => {
    return total + vinho.estoque;
  }, 0);

  console.log(`Estoque total da vinícola: ${estoqueTotal}`);

}

function mostrarNomesMaiusculos() {

  const nomesMaiusculos = vinhos.map(vinho =>
    vinho.nome.toUpperCase()
  );

  console.log("NOMES EM CAIXA ALTA:");

  nomesMaiusculos.forEach(nome => {
    console.log(nome);
  });

}

adicionarVinho("Joaquim Gaspardo", "Tinto", 2018, 4);

listarVinhos();

mostrarEstoqueBaixo();

calcularEstoqueTotal();

mostrarNomesMaiusculos();

alert("Sistema da Vinheria executado com sucesso!");