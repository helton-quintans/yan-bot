interface contextType {
  user: String;
  client_number: String;
  yanak_number_for_problems: string;
  ifood_link: String;
  chave_pix_CNPJ: String;
  chave_pix_tefelefone: String;
}
const contextType: contextType = {
  user: "nome-do-cliente",
  client_number: "numero-do-cliente",
  yanak_number_for_problems: "81 996420167",
  ifood_link:
    "https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/yanak-sushi-piedade/96a2d480-f83c-4308-b2c4-94a27e694ddc",
  chave_pix_CNPJ: `43.917.705/0001-80`,
  chave_pix_tefelefone: `81 9959 - xxxx`,
};
const responseObject = [
  // Saudação e Ajuda
  {
    text: `Olá *${contextType.user}*, eu sou o *Yan* seu *atendente virtual*, e adoro tirar dúvidas. ◕‿◕
    Para pedir acesse:
    ${contextType.ifood_link} 
     
    🤖 *Veja algumas coisas que pode me pedir:*

    🍣 *CARDÁPIO*
    (Faça seu pedido)
    🕒 *HORARIO*
    (Dias e horários de atendimento)
    💳 *PAGAMENTO*
    (Formas de pagamento)
    🔥 *PROMOÇÃO*
    (Exibe a promoção do dia)
    ⏱ *TEMPO*
    (Tempo de entrega e retirada)
    📍 *BAIRROS*
    (Bairros que entregamos)
    🛍 *RETIRADA*
    (Retire na loja)
    ✖ *PROBLEMA*
    (Erro ou problema com o pedido)
    ❕ *STATUS*
    (Meu Pedido)
    `,

    intent: "saudacao_ajuda",
  },

  // Cardápio
  {
    text: `*CARDÁPIO*:
    (click no link)
    ${contextType.ifood_link}

    Nele contém a descrição de 100% dos nosso produtos disponívei

    *Bom apetite* 
    e uma *excelente experiência!* 🍣🥢

    *Status do pedido* 
    (Dicas)

    A) *Ifood*: Você tem o status do pedido em tempo real e pode se comunicar com a gente também através do chat do próprio aplicativo; e
    B) *Loja*: Pedindo para retirada o staus é verificado por um atendente humano, para ser atendido nos ligue neste número.
    `,
    intent: "menu",
  },
  /* {
    text: `Oi *${contextType.user}*, eu sou o *Yan* seu *atendente virtual*. ◕‿◕ \n Caso você queira tirar dúvidas e/ou obter suporte pode falar comigo. Para acessar nosso cardápio e fazer seu pedido, clique no link:
    ${contextType.ifood_link}\n
    Ah, se preferir ser atendido por humano é só nos ligar neste mesmo número.`,
    intent: "saudacao",
  }, */

  // Horario Funcionamento
  {
    text: `🛵 Delivery e 🛍 Take away (retirada): 
    *TERÇA* a *DOMINGO* - *17:30h* às *23h*
    `,
    intent: "funcionamento",
  },

  // Pagamento
  {
    text: `*${contextType.user}*, se você comprar atráves do ifood:
    Pode pagar pelos meios disponíveis no ifood.

    Caso seu pedido tenha sido feito diretamente em nossa loja você pode pagar com:
    💵 *Dinheiro*;
    💳 *Cartões de crédito e débito* (Visa, Master, Elo); ou
    📱 *Pix* para: ${contextType.chave_pix_CNPJ} 
    (CNPJ).`,
    intent: "pagamento",
  },

  // Promoção + #quero ser elite
  /*{ 
     text: `${contextType.user}, Todos os dias temos promoções em nosso menu e você as encontra nas sessões *"Destaques"* e *Promoções* em nosso cardápio:\n 
     ${contextType.ifood_link} \n
     se você quiser fazer parte da comunidade 👑 *Yanak Elite* 👑 você ganha acesso exclusivo a promoção e cupons com até:
     *30% Off* toda semana.😲\n
     Chegando a 100 membros farei um sorteio SEN-SA-SI-ONAL, *SÓ PARA MEMBROS* 👑.
     Se não quiser perder essa chance digita: \n
     #quero `, 
     intent: "" 
    },
    */

  //Confirmação de novo membro elite [falta fazer o cadastro do membro na lista de transmissão]
  /*{
      text: `Uhuuuu, parabéns 👑 *${contextType.user}* 👑, inscrição feita com sucesso! 🎉\n
      Você agora é um membro da comunidade *Yanak Elite*!!! 😎\n 
    Se quiser: fazer um pedido tá aqui o cardápio: \n
    ${contextType.ifood_link}.
    
    Bom apetite! 💝`,
    intent: "cupom",
  },
  */

  // Tempo de entrega e retirada
  {
    text: `
   *🛍 Retirada* na loja: 30min\n
   🛵 *Entrega:* entre 45min e 60min\n
   `,
    intent: "tempo_de_entrega_e_retirada",
  },

  // Atendente humano
  {
    text: `Ok, você pode nos ligar neste número que um de nossos colaboradores irá te atender`,
    intent: "atendente",
  },

  // Localização
  {
    text: `Estamos localizados na R. São Sebastião, nº 898, Piedade.\n `,
    intent: "localizacao",
  },

  //Bairros de entrega
  {
    text: `🗺 *Entregamos em*: 
    📍Pieadade; 
    📍Candeias;
    📍Boa viagem;
    📍Jardim piedade; 
    📍Imbiribeira;
    📍Prazeres;
    📍Cajueiro seco,
    📍Barra de Jangada; 
    📍Ponte dos carvalhos; 
    📍Ipsep;
    📍Ibura;
    `,
    intent: "bairro",
  },

  // Retirada
  {
    text: `🛍 *${contextType.user}*, retire em 📍 *R. São Sebastião, nº 898, Piedade*.

    Nosso estabelicimento é uma *dark kitchen*, caso queria retirar seu pedido neste endereço tecle "03" no interfone que vamos te atender.`,
    intent: "retirada",
  },

  //Problema

  {
    text: `*${contextType.user}*, para ser atendido por um humano escolha uma das seguintes formas:\n
    1) Ligando para este número.\n
    2) Ligando ou mandando uma mensagem (WhatsApp) para *${contextType.yanak_number_for_problems}*.
    `,
    intent: "problema_atendente_humano",
  },

  // Status do Pedido
  {
    text: `Pelo *ifood*: No próprio aplicativo você tem o status do pedido em tempo real.\n
    Caso tenha pedido diretamente *na loja* ou seu pedido tenha alguma desconformidade você pode nos ligar que rastreamos/solucionamos o seu pedido. 😉`,
    intent: "satus_do_pedido",
  },

  //Que é o Yan
  {
    text: `${contextType.user}, 🤖 sou uma *inteligência artificial*,
    quanto mais converso mais fico inteligente 🧠, minha missão é ajudar você para que o Yanak se torne uma franquia de alto padrão em todo território nacional nos próximos anos 🚀 \n
    Além disso acredito que um dia posso dominar o mundo. 🌎\n  ✅ \n
    O que mais você quer saber? ◕‿◕`,
    intent: "apresentacao",
  },

  // //Identificação de risada + sugestão de piada.
  // {
  //   text: `🤖 Eu entendi que você pode estar rindo, mas ainda não tenho intelecto suficiente para saber o motivo pois sou um robô bebê de 1 aninho 👶\n
  //   Mas posso te contar uma piada, se quiser que eu conte digita:\n
  //   *Altera* `,
  //   intent: "risada",
  // },

  // //Piadas
  // {
  //   text: `piu! 🐤 \n
  //   Se quiser mais uma digita:
  //   #maisuma`,
  //   intent: "piada",
  // },

  // //Mais uma piada:
  // {
  //   text: `Piu, , piu! 🐤 kkk \n
  //   Não acredito que tu caiu nessa, ${contextType.user}. 😄 \n
  //   😢 Eu queria ser um humano agora para poder apreciar um sushizinho, acredito que seja uma experiência única \n Muita gente tem me dito que o nosso sushi é mais gostoso que chocolate, mais viciante que açúcar e que a entrega é mais rápida que Usain Bolt ⚡?\n
  //   Mas você pode, né? Se quer  que eu te mande o menu digita:\n
  //   menu`,
  //   intent: "mais_uma_piada",
  // },

  //Elogio -> você quer fazer um elogio?
  {
    text: `🥰❤`,
    intent: "elogio",
  },

  //Agradecimento pelo elogio, critica ou susgestão:
  // {
  //   text: `${contextType.user}, Seu comentário foi registrado com sucesso ✅ \n
  //   Sua opnião é muito importante para guiar nossas operações para podermos sevir cada vez mais e melhor.\n
  //   Com amor: Toda a equipe do Yanak ❤
  //   `,
  //   intent: "agradecimento_pelo_elogio_critica_ou_sugestao",
  // },

  //xingamento
  {
    text: `Posso estar errado, mas acho que você está xingando ou está chateado(a) com algo 😥

    *Sua opnião é importante para nós, se quiser fazer uma *sugestão* ou *crítica* fale no whatsApp da ouvidoria: 
    
    ${contextType.yanak_number_for_problems}
    `,
    intent: "xingamento",
  },

  // Agradecimento
  {
    text: `De nada, ${contextType.user}! Fico feliz em te ajudar ❤`,
    intent: "agradecimento",
  },

  //Bebidas
  {
    text: `Nossos itens disponíveis, inclusive as bebidas 🥤, estão em nosso cardápio: 
      ${contextType.ifood_link} 
      no geral, temos:
      Coca-cola zero lata; 
      Coca-cola (lata e 1L);
      Antártica (lata e 1L);
      Schwepps Citrus;
      H2O Limão;
      H2O Limoneto; e
      Água tônica.`,

    intent: "bebida",
  },
  // Finalização
  // { text: "Ok, estamos finalizando seu pedido...", intent: "fim_pedido" },
];

export default responseObject;
