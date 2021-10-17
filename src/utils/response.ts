import responseObject from "../config/response";

const config = (manager: any) => {
  try {
    responseObject.forEach((item) => {
      manager.addAnswer("pt", item.intent, item.text);
    });
    return manager;
  } catch (error) {
    throw new Error("Treinamento das respostas falhou.");
  }
};

export default { config };
