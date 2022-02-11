import { format, compareAsc } from "date-fns";
import { Whatsapp } from "@wppconnect-team/wppconnect";

export default async function sendImage(client: Whatsapp, message: any) {
  try {
    const today = format(new Date(), "EEE");
    switch (today) {
      case "Sat":
        await client.sendImage(
          message.from,
          "C:/Projetos/yan-bot/src/images/promotions/sat.png",
          "sat.png",
          ""
        );
        await client.sendImage(
          message.from,
          "C:/Projetos/yan-bot/src/images/promotions/sat1.png",
          "sat1.png",
          ``
        );
        break;
      case "Sun":
        await client.sendImage(
          message.from,
          "C:/projects/yan-bot/src/images/sun.png",
          "Sun.png",
          "Promoção do domingãaao caraaiooo, porra"
        );
        break;
      case "Tue":
        await client.sendImage(
          message.from,
          "C:/projects/yan-bot/src/images/promotions/tue1.png",
          "tue1.png",
          `Escolha 1 temaki e 1 roll (12 und.).
          Nesta opção mandamos 1 hashi, 1 molheira e 2 sachês de shoyo.`
        );
        break;
      case "Wed":
        await client.sendImage(
          message.from,
          "C:/projects/yan-bot/src/images/promotions/wed1.png",
          "wed1.png",
          `24 Hot rolls à sua escolha. Nesta opção mandamos 1 hashi, 1 molheira e 2 sachês de shoyo.`
        );
        break;
      case "Thu":
        await client.sendImage(
          message.from,
          "C:/projects/yan-bot/src/images/promotions/thu1.png",
          "thu1.png",
          `1 Yakissoba, 1 Rolinhos e 1 Refrigerante lata à sua escolha, por apenas R$ 39,90`
        );
        break;
      case "Fri":
        await client.sendImage(
          message.from,
          "C:/projects/yan-bot/src/images/promotions/fri1.png",
          "fri1.png",
          `Escolha 2 temakis.
          Nesta opção mandamos: 1 hashi, 1 molheira e 2 sachês de shoyo.`
        );
        break;
      default:
        console.info("Erro na lib de datas");
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
