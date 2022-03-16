const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

const listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "simples",
    ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
    preparo: "jodbvnujd osbvcujsbn jsbfusb",
    link: "youtube.com",
    vegano: false,
  },
];

function cadastrarReceita(
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}

cadastrarReceita(
  "RECEITA1",
  "Bata Frita",
  "Simples",
  ["batata", "oleo"],
  "sdjkfbsdjh kfjsbnfjsb fjsn'fk",
  "youtube.com",
  true
);

// console.log(listaDeReceitas[1].ingredientes);

function exibirReceitas() {
  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];
    console.log("--------------------------------");
    console.log("Titulo = " + receita.titulo);

    for (let index = 0; index < receita.ingredientes.length; index++) {
      const ingrediente = receita.ingredientes[index];
      console.log("ingredientes = " + ingrediente);
    }

    console.log("É vegano? " + receita.vegano);
    console.log("--------------------------------");
  }
}

// exibirReceitas();

function deletarReceita(id) {
  let novaListaDeReceitas = [];

  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];

    if (receita.id != id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}

function deletarReceita(id) {
  const novaListaDeReceitas = listaDeReceitas.filter(
    (receita) => receita.id != id
  );

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}

// function deletarReceita(id) {
//   for (let i = 0; i < listaDeReceitas.length; i++) {
//     if (id === listaDeReceitas[i].id) {
//       listaDeReceitas.splice(i, 1);
//       return console.log(`receita ${listaDeReceitas[i].titulo} deletada`);
//     }
//   }

//   console.log("Receita não encontrada");
// }

// function somar(a, b) {
//   return a + b;
// }

const somar = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;

const calculadora = (a, b, acao) => {
  return acao(a, b);
};

console.log("somando");
const resultadoSoma = calculadora(10, 10, somar);
console.log("multiplicacao", calculadora(10, resultadoSoma, multiplicacao));

listaDeReceitas.forEach(function (receita, index, listaDeReceitas) {
  if (id === receita.id) {
    listaDeReceitas.splice(i, 1);
    return console.log(`receita ${receita.titulo} deletada`);
  }
});

const condicaoDeReceita = (receita) => (receita.vegano = true);

const novoArray = listaDeReceitas.map(condicaoDeReceita);

const receitaNormais = listaDeReceitas.filter(
  (receita) => receita.vegano == true
);

const novoArray = [];
listaDeReceitas.forEach((receita) => {
  receita.vegano = true;

  novoArray.push(receita);
});

function forEach(acao) {
  for (let index = 0; index < array.length; index++) {
    acao(array[index], index, array);
  }
}
