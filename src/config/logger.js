const pino = require("pino");

const logger = pino({
  prettyPrint: {
    ignore: "pid,hostname",
  },
});
module.exports = { logger };
