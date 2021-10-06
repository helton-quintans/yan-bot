interface contextType {
  user: String,
  number: String,
}
const contextType: contextType = {
  user: "[nome-do-cliente]",
  number: "[numbero-do-cliente]"
}
const responseObject = [
  // Saudação
  {
    text: `Olá ${contextType.user}, eu sou o Yan seu atendente virtual. Caso queira fazer um pedido acesse o link: https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/yumei-temakeria-piedade/b77ae307-2102-4034-9bf8-137c38676086 \nVamos nessa?`,
    intent: "saudacao",
  },
  {
    text: `E ai ${contextType.user} `,
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
  // Menu
  {
    text: "Se houver dúvidas sobre o pedido fala com a gente diretamente pelo chat do Ifood: ifood ifood.com.br/delivery/jaboatao-dos-guararapes-pe/yumei-temakeria-piedade/b77ae307-2102-4034-9bf8-137c38676086!.",
    intent: "menu",
  },

  // Finalização
  // { text: "Ok, estamos finalizando seu pedido...", intent: "fim_pedido" },
];

export default responseObject