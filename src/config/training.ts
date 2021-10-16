const trainingObject = [
  // Saudação e Ajuda
  { text: "ajuda", intent: "saudacao_ajuda" },
  { text: "oi", intent: "saudacao_ajuda" },
  { text: "ola", intent: "saudacao_ajuda" },
  { text: "ei", intent: "saudacao_ajuda" },
  { text: "e ae", intent: "saudacao_ajuda" },
  { text: "iae", intent: "saudacao_ajuda" },
  { text: "dale", intent: "saudacao_ajuda" },
  { text: "bora mo vei", intent: "saudacao_ajuda" },
  { text: "bom dia", intent: "saudacao_ajuda" },
  { text: "boa tarde", intent: "saudacao_ajuda" },
  { text: "boa noite", intent: "saudacao_ajuda" },
  
  // Menu
  { text: "menu", intent: "menu" },
  { text: "manda", intent: "menu" },
  { text: "me da", intent: "menu" },
  { text: "deixa eu ver", intent: "menu" },
  { text: "o cardapio", intent: "menu" },
  { text: "cardápio", intent: "menu" },
  { text: "posso ver o cardapio", intent: "menu" },
  { text: "temaki", intent: "menu" },
  { text: "sushi", intent: "menu" },
  { text: "uramaki", intent: "menu" },
  { text: "huramaki", intent: "menu" },
  { text: "niguiri", intent: "menu" },
  { text: "sunomono", intent: "menu" },
  { text: "sashimi", intent: "menu" },
  { text: "sachimi", intent: "menu" },
  { text: "hot", intent: "menu" },
  { text: "carioca", intent: "menu" },
  { text: "combo", intent: "menu" },
  { text: "combos", intent: "menu" },
  { text: "combinado", intent: "menu" },
  { text: "combinados", intent: "menu" },
  { text: "ceviche", intent: "menu" },
  { text: "rolinho", intent: "menu" },
  { text: "rolinho primavera", intent: "menu" },
  { text: "hossomaki", intent: "menu" },
  { text: "hussomaki", intent: "menu" },
  { text: "ossomaki", intent: "menu" },
  { text: "ussomaki", intent: "menu" },
  { text: "maki", intent: "menu" },
  { text: "vegetariano", intent: "menu" },
  { text: "harumaki", intent: "menu" },
  { text: "maki", intent: "menu" },
  { text: "kakiague", intent: "menu" },
  { text: "jojo", intent: "menu" },
  { text: "jo jo", intent: "menu" },
  { text: "jo", intent: "menu" },
  { text: "jow jow", intent: "menu" },
  { text: "ebi", intent: "menu" },
  { text: "sashimi", intent: "menu" },
  { text: "sashimi", intent: "menu" },
  { text: "porção extra", intent: "menu" },
  { text: "porções", intent: "menu" },
  { text: "camarão", intent: "menu" },
  { text: "salmão", intent: "menu" },
  { text: "gergelim", intent: "menu" },
  { text: "pepino", intent: "menu" },
  { text: "pimenta", intent: "menu" },
  { text: "preço", intent: "menu" },
  { text: "massaricado", intent: "menu" },
  { text: "massaricada", intent: "menu" },
  { text: "maçaricado", intent: "menu" },
  { text: "maçaricada", intent: "menu" },
  
  // Horario de funcionamento
  { text: "horario", intent: "funcionamento" },
  { text: "horarios", intent: "funcionamento" },
  //{ text: "dias vocês funcionam", intent: "funcionamento" },
  //{ text: "quais dias vocês atendem", intent: "funcionamento" },
  //{ text: "functionamento", intent: "funcionamento" },
  //{ text: "horas", intent: "funcionamento" },
  
  // Formas de pagamento
  { text: "pagamento", intent: "pagamento" },
  { text: "pgto", intent: "pagamento" },
  { text: "forma de pagamento", intent: "pagamento" },
  { text: "vale", intent: "pagamento" },
  { text: "dinheiro", intent: "pagamento" },
  { text: "cartao", intent: "pagamento" },
  { text: "pagar", intent: "pagamento" },
  { text: "visa", intent: "pagamento" },
  { text: "alelo", intent: "pagamento" },
  { text: "master", intent: "pagamento" },
  { text: "sodexo", intent: "pagamento" },
  { text: "bem visa vale", intent: "pagamento" },
  { text: "vale refeicao", intent: "pagamento" },
  { text: "vale alimentacao", intent: "pagamento" },

  
  // Promoção + #quer ser elite?
  { text: "promocao", intent: "promocao" },
  { text: "promoção do dia", intent: "promocao" },
  { text: "cupom", intent: "promocao" },
  
  // Tempo de entrega e retirada
  { text: "tempo", intent: "tempo_de_entrega_e_retirada" },
  
  // Retirada
  { text: "retirada", intent: "retirada" },
  { text: "retiro", intent: "retirada" },
  
  // Atendente
  { text: "atendente", intent: "problema_atendente_humano" },
  { text: "humano", intent: "problema_atendente_humano" },
  
  //Bairros de entrega
  { text: "bairro", intent: "bairro" },
  { text: "bairros", intent: "bairro" },
  
  // Bebidas
  { text: "bebida", intent: "bebida" },
  { text: "bebidas", intent: "bebida" },
  { text: "coca-cola", intent: "bebida" },
  { text: "guarana", intent: "bebida" },
  { text: "agua tonica", intent: "bebida" },
  { text: "agua com gas", intent: "bebida" },
  { text: "agua com gas limoneto", intent: "bebida" },
  { text: "agua com gas limao", intent: "bebida" },
  
  // Status - OK
  { text: "status", intent: "satus_do_pedido" },
  
  //Confirmação de novo membro elite [falta fazer o cadastro do membro na lista de transmissão] 
  { text: "#quero", intent: "cupom" },
  
  // Localicação
  { text: "onde", intent: "localizacao" },
  { text: "aonde", intent: "localizacao" },
  { text: "ponto de referencia", intent: "localizacao" },
  { text: "endereço", intent: "localizacao" },
  { text: "localizacao", intent: "localizacao" },

  
  //Identificação de risada + sugestão de piada.
  { text: "haha", intent: "risada" },
  { text: "hahaha", intent: "risada" },
  { text: "hahahah", intent: "risada" },
  { text: "hahahaha", intent: "risada" },
  { text: "hahahahah", intent: "risada" },
  { text: "hahahahaha", intent: "risada" },
  { text: "hahahahahahahahahahahahha", intent: "risada" },
  { text: "hahaahha", intent: "risada" },
  { text: "kkk", intent: "risada" },
  { text: "kkkkk", intent: "risada" },
  { text: "kkkkkk", intent: "risada" },
  { text: "kkkkkkk", intent: "risada" },
  { text: "hkkkkkkkkkkk", intent: "risada" },
  { text: "hkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", intent: "risada" },
  { text: "hahhehe", intent: "risada" },
  { text: "hahhehe", intent: "risada" },
  { text: "hihihi", intent: "risada" },
  { text: "rs", intent: "risada" },
  { text: "rsrsrs", intent: "risada" },
  { text: "hueheheuehu", intent: "risada" },
  { text: "hueheh", intent: "risada" },
  
  //Piada
  { text: "#umapiada", intent: "piada" },

  // Mais uma piada
  { text: "#maisuma", intent: "mais_uma_piada" },
  
  //Problema
  { text: "problema", intent: "problema_atendente_humano" },

  /*
  { text: "não gosto", intent: "problema" },
  { text: "não gostei", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "n gosto", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "n gostei", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "fiquei chateado", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "fiquei chateada", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "puta que pariu", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "pqp", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "estou chateado", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "estou chateada", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "estou puto", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "estou puta", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "porcaria", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "odiei", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "odieio", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "péssimo", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "pessimo", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "horroso", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "horoso", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "horoso", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "bosta", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "horrível", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "frio", intent: "chateado_reclamacao_ou_sugestao" },
  { text: "murcho", intent: "chateado_reclamacao_ou_sugestao" },
  */
  
  // Elogio
  { text: "amei", intent: "elogio" },
  { text: "elogio", intent: "elogio" },
  { text: "muito bom", intent: "elogio" },
  { text: "excelente", intent: "elogio" },
  { text: "magnifico", intent: "elogio" },
  { text: "adorei", intent: "elogio" },
  { text: "gostei", intent: "elogio" },
  { text: "estava delicioso", intent: "elogio" },
  { text: "delícia", intent: "elogio" },
  { text: "maravilhoso", intent: "elogio" },
  { text: "maravilhosa", intent: "elogio" },
  { text: "delícia", intent: "elogio" },
  { text: "melhor", intent: "elogio" },
  
  
  //Agradecimento pelo elogio, crítica ou sugestão
  { text: "#fim", intent: "agradecimento_pelo_elogio_critica_ou_sugestao" },
  
  // Xingamento - 
  { text: "puto", intent: "xingamento" },
  { text: "puta", intent: "xingamento" },
  { text: "bosta", intent: "xingamento" },
  { text: "lixo", intent: "xingamento" },
  { text: "burro", intent: "xingamento" },
  { text: "burra", intent: "xingamento" },
  { text: "arrombado", intent: "xingamento" },
  { text: "arrombada", intent: "xingamento" },
  { text: "vai te foder", intent: "xingamento" },
  { text: "vai te fuder", intent: "xingamento" },
  { text: "te fode", intent: "xingamento" },
  { text: "tnc", intent: "xingamento" },
  { text: "cu", intent: "xingamento" },
  { text: "tomar no cu carai", intent: "xingamento" },
  { text: "merda", intent: "xingamento" },
  { text: "chato", intent: "xingamento" },
  { text: "chata", intent: "xingamento" },
  { text: "piranha", intent: "xingamento" },
  { text: "porra", intent: "xingamento" },
  { text: "babaca", intent: "xingamento" },
  { text: "buceta", intent: "xingamento" },
  { text: "bct", intent: "xingamento" },
  { text: "pega no pau", intent: "xingamento" },
  { text: "pau", intent: "xingamento" },
  
  
  //Agredecimento - FAZER RESPONSE
  { text: "obrigado", intent: "agradecimento" },
  { text: "obrigada", intent: "agradecimento" },
  { text: "obg", intent: "agradecimento" },
  { text: "valeu", intent: "agradecimento" },
  { text: "obg", intent: "agradecimento" },
  { text: "muito obg", intent: "agradecimento" },
  { text: "mt obg", intent: "agradecimento" },
  
  //Apresentação -OK
  { text: "quem é", intent: "apresentacao" },
  { text: "quem ta falando", intent: "apresentacao" },
  { text: "quem esta falando", intent: "apresentacao" },
  { text: "quem é yan", intent: "apresentacao" },
  { text: "quem o yan", intent: "apresentacao" },
  { text: "com quem ", intent: "apresentacao" },
  { text: "com quem falo", intent: "apresentacao" },
  
  // // Finalização pedido
  // { text: "quanto fica", intent: "fim_pedido" },
  // { text: "finaliza", intent: "fim_pedido" },
  // { text: "conta", intent: "fim_pedido" },
  // { text: "fecha", intent: "fim_pedido" },
];
export default trainingObject;
