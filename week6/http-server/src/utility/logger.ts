import * as log4js from "log4js"

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: `${__dirname}/app.log` }
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' }
  }
})

export default log4js.getLogger("default")
