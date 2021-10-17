// Supports ES6

import { create, Whatsapp } from "venom-bot";
import manager from "./utils/manager";
// const { logger } = require("./config/logger");
import { format, compareAsc } from "date-fns";

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
              case "promocao":
                const today = format(new Date(), "EEE");
                console.log(today);
                try {
                  switch (today) {
                    case "Sat":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/sat.png",
                        "sat.png",
                        "Promoção do sabaãaao caraaiooo, porra"
                      );
                      break;
                    case "Sun":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/sun.png",
                        "Sun.png",
                        "Promoção do domingãaao caraaiooo, porra"
                      );
                      break;
                    case "Tue":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/tue.png",
                        "Teu.png",
                        "Promoção do *teeerça* caraaiooo, porra"
                      );
                      break;
                    case "Wed":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/wed.png",
                        "Wed.png",
                        "Promoção do *Quaaarta* caraaiooo, porra"
                      );
                      break;
                    case "Thu":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/thu.png",
                        "Thu.png",
                        "Promoção do *Quiiiinta* caraaiooo, porra"
                      );
                      break;
                    case "Fri":
                      await client.sendImage(
                        message.from,
                        "C:/Projetos/yan-bot/src/images/sun.png",
                        "Sun.png",
                        "Promoção de *Seeexta* caraaiooo, porra"
                      );
                      break;
                    default:
                      break;
                  }
                } catch (error) {
                  console.error(error);
                }
                break;
              case "localizacao":
                await client.sendLocation(
                  message.from,
                  "-8.1824068",
                  "-34.9266635",
                  "Yanak Sushi"
                );
                break;
              default:
                const formatedResponse = response.answer.replace(
                  "nome-do-cliente",
                  message.sender.shortName
                );
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

Main();
