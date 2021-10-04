const trainingObject = [
  // Saudação
  { text: "oi", intent: "saudacao" },
  { text: "ola", intent: "saudacao" },
  { text: "ei", intent: "saudacao" },
  { text: "e ae", intent: "saudacao" },
  { text: "dale", intent: "saudacao" },
  { text: "bora mo vei", intent: "saudacao" },
  { text: "bom dia", intent: "saudacao" },
  { text: "boa tarde", intent: "saudacao" },
  { text: "boa noite", intent: "saudacao" },
  
  // Bebidas
  { text: "coca-cola", intent: "bebida_refri" },
  { text: "guarana", intent: "bebida_refri" },
  { text: "agua tonica", intent: "bebida_refri" },
  { text: "agua com gas", intent: "bebida_refri" },
  { text: "agua com gas limoneto", intent: "bebida_h2o" },
  { text: "agua com gas limao", intent: "bebida_h2o" },

  // Tamanho bebida
  { text: "1 litro", intent: "bebida_tamanho" },
  { text: "lata", intent: "bebida_tamanho" },

  // localicação
  { text: "onde fica localizada", intent: "localizacao" },
  { text: "onde é", intent: "localizacao" },
  { text: "qual o ponto de referencia", intent: "localizacao" },
  { text: "qual o endereço", intent: "localizacao" },
  { text: "qual a localizacao da empresa", intent: "localizacao" },

  // Retirada
  { text: "onde retiro", intent: "retirada" },
  { text: "retirada", intent: "retirada" },
  { text: "aonde retiro", intent: "retirada" },

  // Horario de funcionamento
  { text: "horario", intent: "funcionamento" },
  { text: "functionamento", intent: "funcionamento" },
  { text: "horas", intent: "funcionamento" },

  // Formas de pagamento
  { text: "aceita", intent: "pagamento" },
  { text: "vale", intent: "pagamento" },
  { text: "dinheiro", intent: "pagamento" },
  { text: "cartao", intent: "pagamento" },
  { text: "posso pagar", intent: "pagamento" },
  { text: "visa", intent: "pagamento" },
  { text: "alelo", intent: "pagamento" },
  { text: "master", intent: "pagamento" },
  { text: "vale refeicao", intent: "pagamento" },
  // Menu
  { text: "menu", intent: "menu" },
  { text: "manda", intent: "menu" },
  { text: "me da", intent: "menu" },
  { text: "deixa eu ver", intent: "menu" },
  { text: "o cardapio", intent: "menu" },
  { text: "vamos", intent: "menu" },

  // Finalização pedido
  { text: "quanto fica", intent: "fim_pedido" },
  { text: "finaliza", intent: "fim_pedido" },
  { text: "conta", intent: "fim_pedido" },
  { text: "fecha", intent: "fim_pedido" },
];
export default trainingObject;
