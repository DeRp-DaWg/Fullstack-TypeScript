import * as dotenv from "dotenv"
import * as http from "http"
import fs from "fs"
import url from "url"
import logger from "./utility/logger"

dotenv.config()
console.log(process.env.PORT)

const server = http.createServer((req, res) => {
  const {query, pathname, path, href, search} = url.parse(req.url!, true)
  res.writeHead(200, {"Content-Type": "text/html"})

  logger.debug(`Requested ${pathname}.`)
  
  // Homepage
  if (pathname === "/" || pathname === "/homepage") {
    fs.readFile(`${__dirname}/public/homepage.html`, (err, data) => {
      res.end(data)
    })
  // About
  } else if (pathname === "/about") {
    fs.readFile(`${__dirname}/public/about.html`, (err, data) => {
      res.end(data)
    })
  // Logger
  } else if (pathname === "/logger") {
    fs.readFile(`${__dirname}/public/about.html`, (err, data) => {
      res.end(data)
    })
  // Data
  } else if (pathname === "/data") {
    res.writeHead(200, {"Content-Type": "application/json"})
    fs.readFile(`${__dirname}/public/data.json`, (err, data) => {
      res.end(data)
    })
  // Date
  } else if (pathname === "/date") {
    res.end(`Date: ${query.year}-${query.month}-${query.day}`)
  // Error page
  } else {
    res.end(`Page "${pathname}" does not exist`)
  }
})

server.listen({
  host: process.env.HOSTNAME,
  port: process.env.PORT
}, () => {
  console.log(`Server is listening to http://localhost:${process.env.PORT}`)
})
