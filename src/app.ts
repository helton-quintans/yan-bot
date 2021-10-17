// Supports ES6
import { create, Whatsapp } from "venom-bot";
import manager from "./utils/manager";
const { logger } = require("./config/logger");

const Main = async () => {
  const nlpManager = manager.config();
  logger.info("Configurando inteligencia artificial...")
  await nlpManager.train();
  logger.info("Treinando...")
  nlpManager.save();
  logger.info("Salvando...")
  create("BOT")
    .then(async (client) => {
      //Evento
      client.onMessage(async (message) => {
        if (message.isGroupMsg === false) {
          try {
            const response = await nlpManager.process("pt", message.body);
            // console.log("[intent]", response.intent);
            // console.log("[score]", response.intent);
            // console.log("[type]", response.type);
            switch (response.intent) {
              //case "None":
              // await client.sendText(
              //   message.from,
              //   "Ahhh :( Desculpa, não entendi o que você quis dizer."
              // );
              //  break;
              //case "saudacao":
                //await client.sendImage();
                //break;
              case "menu":
                await client.sendText(message.from, response.answer);
                break;
              //case "promocao":
                //await client.sendImage(`+5581996591072@c.br`,);
                //break;
              case "localizacao":
                await client.sendLocation(
                  message.from,
                  "-8.1824068",
                  "-34.9266635",
                  "Yanak Sushi"
                );
                break;
              default:
                const formatedResponse = response.answer.replace("nome-do-cliente", message.sender.shortName)
                await client.sendText(message.from, formatedResponse);
                break;
            }
          } catch (error) {
            logger.error(error);
          }
        }
      });
    })
    .catch((erro) => {
      logger.error(erro);
    });
};

Main();
