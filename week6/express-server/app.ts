import express = require("express")
import morgan = require("morgan")

const app = express()
// console.log(process.env);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
  console.log("Development mode.")
} else if (process.env.NODE_ENV === "production") {

}

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World"
  })
})

app.get("/hello", (req, res) => {
  res.status(200).json({
    welcome_msg: `Hello ${req.query.name}!`
  })
})

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000")
})
