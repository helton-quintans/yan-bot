import { create, Whatsapp } from "venom-bot";
import manager from "./utils/manager";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import sendImage from "./utils/sendImage";



const Main = async () => {
  const nlpManager = manager.config();
  console.info("Configurando inteligencia artificial...")
  await nlpManager.train();
  console.info("Treinando...")
  nlpManager.save();
  console.info("Salvando...")
  const departaments = ["rh","ti","comercial","posvenda"]

  // Multiplos numeros de whatsapp conectados ao mesmo tempo com contextos de serviço automatico de atendimento difenrentes

  // +55 81 9999xxxxx posvenda
  // +55 81 9999xxxxx rh
  // +55 81 9999xxxxx comercial
  // +55 81 9999xxxxx ti
  
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
                const message_telegram = `${message.from}|${message.sender.pushname}`;
                await axios.get(`
                https://api.telegram.org/bot2023746859:AAHb-YKxJCVoUwgq2DTanKaehthEO5HNYng/sendMessage?text="${message_telegram}|${response.utterance}"&chat_id=-643980370`);
                break;
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
                await sendImage(client, message);
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
                if (response.answer != undefined) {
                  const formatedResponse = response.answer.replace(
                    "nome-do-cliente",
                    message.sender.shortName
                  );
                  await client.sendText(message.from, formatedResponse);
                }
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



