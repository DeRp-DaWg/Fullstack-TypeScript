import express = require("express")
import morgan = require("morgan")
import fs = require("fs/promises")
import pf = require("./src/peopleFacade")
import { Person, PersonIncomplete, PersonNoID } from "./src/types/personType"

const app = express()
// console.log(process.env);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
  console.log("Development mode.")
} else if (process.env.NODE_ENV === "production") {

}

app.use(express.json())

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

app.get("/people", async (req, res) => {
  const people = await pf.getAllPeople()
  res.status(200).json({
    people: people
  })
})

app.get("/people/:id", async (req, res) => {
  pf.getPersonById(Number(req.params.id))
  .then((person) => {
    res.status(200).json({
      person: person
    })
  })
  .catch(() => {
    res.status(500).json({
      status: "Could not find person." 
    })
  })
  
})

app.post("/people", async (req, res) => {
  const name: string = req.body.name
  const age: number = req.body.age
  const city: string = req.body.city
  const person: PersonNoID = {
    name: name,
    age: age,
    city: city
  }
  pf.createPerson(person)
  .then(() => {
    res.status(200).json({
      status: "success"
    })
  })
  .catch(() => {
    res.status(500).json({
      status: "Could not create person."
    })
  })
})

app.put("/people/:id", async (req, res) => {
  const person: Person = {
    id: Number(req.params.id),
    name: req.body.name,
    age: req.body.age,
    city: req.body.city
  }
  pf.updatePerson(person)
  .then(() => {
    res.status(200).json({
      status: "success"
    })
  })
  .catch(() => {
    res.status(500).json({
      status: "Could not update person."
    })
  })
})

app.patch("/people/:id", async (req, res) => {
  const person: PersonIncomplete = {
    id: Number(req.params.id),
    name: req.body.name,
    age: req.body.age,
    city: req.body.city
  }
  pf.patchPerson(person)
  .then(() => {
    res.status(200).json({
      status: "success"
    })
  })
  .catch(() => {
    res.status(500).json({
      status: "Could not patch person."
    })
  })
})

app.delete("/people/:id",async (req, res) => {
  pf.deletePerson(Number(req.params.id))
  .then(() => {
    res.status(200).json({
      status: "success"
    })
  })
  .catch(() => {
    res.status(500).json({
      status: "Could not delete person."
    })
  })
})

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000")
})
