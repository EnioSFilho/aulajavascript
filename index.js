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

console.log(listaDeReceitas);

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

// function exibirReceitas() {
//   for (let index = 0; index < listaDeReceitas.length; index++) {
//     const receita = listaDeReceitas[index];
//     console.log("--------------------------------");
//     console.log("Titulo = " + receita.titulo);

//     for (let index = 0; index < receita.ingredientes.length; index++) {
//       const ingrediente = receita.ingredientes[index];
//       console.log("ingredientes = " + ingrediente);
//     }

//     console.log("É vegano? " + receita.vegano);
//     console.log("--------------------------------");
//   }
// }

// exibirReceitas();

// function deletarReceita(id) {
//   let novaListaDeReceitas = [];

//   for (let index = 0; index < listaDeReceitas.length; index++) {
//     const receita = listaDeReceitas[index];

//     if (receita.id != id) {
//       novaListaDeReceitas.push(receita);
//     }
//   }

//   if (novaListaDeReceitas.length == listaDeReceitas.length) {
//     return console.log("Não encontrei o id");
//   }

//   listaDeReceitas = novaListaDeReceitas;
//   console.log("receita deletada com sucesso!");
// }

function deletarReceita(id) {
  for (let i = 0; i < listaDeReceitas.length; i++) {
    if (id === listaDeReceitas[i].id) {
      listaDeReceitas.splice(i, 1);
      return console.log("receita deletada");
    }
  }

  console.log("Receita não encontrada");
}

deletarReceita(1);
