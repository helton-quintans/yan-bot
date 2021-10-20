import { format, compareAsc } from "date-fns";
import { Whatsapp } from "venom-bot";
import { logger } from "../config/logger";

export default async function sendImage(client: Whatsapp, message: any) {
  try {
    const today = format(new Date(), "EEE");
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
        logger.info("Erro na lib de datas");
        break;
    }
  } catch (error) {
    logger.error(error);
  }
}
