import responseObject from "../config/response";

const config = (manager: any) => {
  responseObject.forEach((item) => {
    manager.addAnswer("pt", item.intent, item.text);
  });
  return manager;
};

export default { config };
