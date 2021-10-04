import trainingObject from "../config/training";
const config = (manager: any) => {
  // Foreach trainingObj ( item ) -> { manager.addDocument('pt',item.text,item.intent) }
  trainingObject.forEach((item) => {
    manager.addDocument("pt", item.text, item.intent);
  });
  return manager;
};

export default { config };
