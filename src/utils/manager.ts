import intents from "./intents";
import response from "./response";

const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["pt"], forceNER: true });

const config = () => {
  // Perguntas
  const preConfig = intents.config(manager);
  // Respostas
  const posConfig = response.config(preConfig);
  return posConfig;
};

export default { config };
