// exercicio 1 colocar o nome da empresa
const nomeDaEmpresa = "Omma Industria Alimentícia";

console.log(`seja bem vindo a  ${nomeDaEmpresa}`);
console.log("_______________________________________");



// 2 e 3 4exercicio cadastrar receita
const listaDeReceitas = [{

    id: 1,
    titulo: "Receita de Pizza",
    dificuldade: "medio",
    ingredientes: ["acucar", "sal", "farinha", "tomate", "queijo"],
    preparo: "o Preparo deve ser realizado a gosto do cliente",
    link: "www.youtube.com",
    vegano: false,
},
];
// arrow function
const cadastrarReceita = (id,  titulo,  dificuldade,  ingredientes,  preparo,  link,  vegano,) => {

  
}
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

console.log(`receita de ${titulo} cadastrada com sucesso`);

// para aqui a arrow funcionkc

function cadastrarReceita(

    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
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

    console.log(`receita de ${titulo} cadastrada com sucesso`);

    // console.log(listaDeReceitas);




}
cadastrarReceita(
    2,
    "Bata Frita",
    "Simples",
    ["batata", "oleo"],
    "sdjkfbsdjh kfjsbnfjsb fjsn'fk",
    "youtube.com",
    true
);

//   exercicio 5
function exibirReceitas() {

    for( let index=0; index < listaDeReceitas.length; index++){

        const resultado = listaDeReceitas[index];

         console.log("----------------------------------------");
         console.log("titulo da receita: " + resultado.titulo);
         console.log("ingredientes: " + resultado.ingredientes);
         console.log("é vegana ?:" + resultado.vegano);

    }

    // minha solucao
    // console.log(listaDeReceitas[0].titulo, listaDeReceitas[0].ingredientes, listaDeReceitas[0].vegano);
    // console.log(listaDeReceitas[1].titulo, listaDeReceitas[1].ingredientes, listaDeReceitas[1].vegano);
}
exibirReceitas()

//   exercicio 6 deletar receita

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

   console.log(listaDeReceitas);
    




// exercicio abaixo feito pelo professor

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
  
  exibirReceitas();
  
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
    for (let i = 0; i < listaDeReceitas.length; i++) {
      if (id === listaDeReceitas[i].id) {
        listaDeReceitas.splice(i, 1);
        return console.log("receita deletada");
      }
    }
  
    console.log("Receita não encontrada");
  }
  
  deletarReceita(1);
   

  //  continuacao da aula dia 15/03/2022 excercio que iria atuaizar

  listaDeReceitas.forEach(receita) => {
    receita.vegano = true;
  }

  function forEach(acao) { 
   for (let index = 0; index < Array.length; index++) {

    acao(array[index], index, array);
  }
    
  };

  function forEach(acao) {
    for (let index = 0; index < array.length; index++) {
      acao(array[index], index, array);
    }
  }
  
  const atualizaReceita = (id, receitaAtualizada) => {
    let foiAtualizado = false;
  
    listaDeReceitas.forEach((receita) => {
      if (receita.id != id) {
        return;
      }
  
      if (receitaAtualizada.titulo) {
        receita.titulo = receitaAtualizada.titulo;
      }
  
      if (receitaAtualizada.ingredientes) {
        receita.ingredientes = receitaAtualizada.ingredientes;
      }
  
      foiAtualizado = true;
    });
  
    console.log(
      foiAtualizado
        ? "Receita atualizada com sucesso!"
        : "Não foi encontrado o id"
    );
  };
  
  "batata frita".indexOf("frita"); // 7
  "batata frita".indexOf("ovo"); // -1
  
  const buscarReceita = (termoBuscado) => {
  
    const resultados = listaDeReceitas.filter(
      (receita) =>
        receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
    );
  
    if (resultados.length) {
      console.log(resultados);
    } else {
      console.log("Não foi encontrado receitas");
    }
  
    if (!resultados.length) {
      console.log("Não foi encontrado receitas");
    }
  
    return console.log(resultados);
  };
  
  
  buscarReceita()