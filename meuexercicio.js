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
  
//   console.log(listaDeReceitas);
  
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
  
    console.log(listaDeReceitas);
  