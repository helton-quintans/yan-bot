import { create, Whatsapp } from "@wppconnect-team/wppconnect";
import manager from "./utils/manager";
// import { format, compareAsc } from "date-fns";
import axios from "axios";
import sendImage from "./utils/sendImage";
// import { logger } from "./config/logger";

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const Main = async () => {
  const nlpManager = manager.config();
  await nlpManager.train();
  nlpManager.save();
  create({
    session: "bot", //Pass the name of the client you want to start the bot
    logger: logger,
    catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
      console.log("Number of attempts to read the qrcode: ", attempts);
      console.log("Terminal qrcode: ", asciiQR);
      // console.log("base64 image string qrcode: ", base64Qrimg);
      // console.log("urlCode (data-ref): ", urlCode);
    },
    statusFind: (statusSession, session) => {
      console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      //Create session wss return "serverClose" case server for close
      console.log("Session name: ", session);
    },
    headless: false, // Headless chrome
    devtools: false, // Open devtools by default
    useChrome: true, // If false will use Chromium instance
    debug: false, // Opens a debug session
    logQR: true, // Logs QR automatically in terminal
    browserWS: "", // If u want to use browserWSEndpoint
    browserArgs: [""], // Parameters to be added into the chrome browser instance
    puppeteerOptions: {}, // Will be passed to puppeteer.launch
    disableWelcome: false, // Option to disable the welcoming message which appears in the beginning
    updatesLog: true, // Logs info updates automatically in terminal
    // autoClose: 60000, // Automatically closes the wppconnect only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
    tokenStore: "file", // Define how work with tokens, that can be a custom interface
    folderNameToken: "./tokens", //folder name when saving tokens
  })
    .then(async (client) => {
      try {
        client.onMessage(async (message) => {
          if (message.isGroupMsg === false) {
            const response = await nlpManager.process("pt", message.body);
            switch (response.intent) {
              case "None":
                const message_telegram = `{numero:${message.from} | nome${message.sender.formattedName} |nome-resumido:${message.sender.shortName} | mensagem nao entendida: ${response.utterance}}`;
                await client.sendText(
                  message.from,
                  `Eita ${message.sender.formattedName}! Ta ai algo que nao consegui entender, estou enviando o que você disse aos meus criadores pra te atender melhor numa proxima vez... `
                );
                await axios({
                  method: "POST",
                  url: "https://api.telegram.org/bot2023746859:AAHb-YKxJCVoUwgq2DTanKaehthEO5HNYng/sendMessage",
                  data: {
                    text: message_telegram,
                    chat_id: -643980370,
                  },
                });
                break;
              case "menu":
                await client.sendText(message.from, response.answer);
                break;
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
          }
        });
      } catch (error: any) {
        console.error(error);
      }
    })
    .catch((erro) => {
      console.error(erro);
    });
};

Main();
