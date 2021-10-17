import trainingObject from "../config/training";
const config = (manager: any) => {
  // Foreach trainingObj ( item ) -> { manager.addDocument('pt',item.text,item.intent) }
  try {
    trainingObject.forEach((item) => {
      manager.addDocument("pt", item.text, item.intent);
    });
    return manager;
  } catch (error) {
    throw new Error("Treinamento falhou");
  }
};

export default { config };
