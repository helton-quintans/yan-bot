// Supports ES6
import { create, Whatsapp } from "venom-bot";
import manager from "./utils/manager";
// const { logger } = require("./config/logger");

const Main = async () => {
  const nlpManager = manager.config();
  await nlpManager.train();
  nlpManager.save();
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
              case "None":
                await client.sendText(
                  message.from,
                  "Ahhh :( Desculpa não entendi sua dúvida"
                );
                break;
              case "menu":
                await client.sendText(message.from, response.answer);
                break;
              case "localizacao":
                await client.sendLocation(
                  message.from,
                  "-8.1824068",
                  "-34.9266635",
                  "Delivery e Retirada!"
                );
                await client.sendText(message.from, response.answer);
                break;
              default:
                const formatedResponse = response.answer.replace("nome-do-cliente", message.sender.shortName)
                await client.sendText(message.from, formatedResponse);
                break;
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    })
    .catch((erro) => {
      console.error(erro);
    });
};

// Função Principal sendo Executada
Main();
