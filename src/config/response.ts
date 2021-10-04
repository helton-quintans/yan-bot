const responseObject = [
  // Saudação
  {
    text: "Olá, eu sou uma atendente virtual do Yanak Sushi Digital Influencer master e blaster nesse carai e estou aqui para te ajudar com seu pedido.\nVamos nessa?",
    intent: "saudacao",
  },
  {
    text: "Olá, sou um Yan, assistente virtual do Yanak Sushi. Adoro tirar dúvidas, qual é a sua?",
    intent: "saudacao",
  },

  // Localização
  {
    text: "Ficamos localizados na Rua X, nº420, Centro de Jardim Piedade.\nPróximo aos Correios.",
    intent: "localizacao",
  },

  // Retirada
  {
    text: "R. São Sebastião, 906 - Piedade, Jaboatão dos Guararapes - PE.",
    intent: "retirada",
  },
  {
    text: "Proximo ao Mercadinho Econômico R. São Sebastião, 906 - Piedade, Jaboatão dos Guararapes - PE.",
    intent: "retirada",
  },

  // Funcionamento
  { text: "Funcionamos das 17:30 as 23h", intent: "funcionamento" },
  {
    text: "Funcionamos das cinco e meia (17:30) as onze da noite (23h)",
    intent: "funcionamento",
  },
  // Pagamento
  {
    text: "Aceitamos todos os cartões, incluindo seu Vale Refeição. Pagamento na entrega!",
    intent: "pagamento",
  },
  {
    text: "Aceitamos todos os cartões. Pagamento na entrega!",
    intent: "pagamento",
  },

  // Finalização
  { text: "Ok, estamos finalizando seu pedido...", intent: "fim_pedido" },
];

export default responseObject