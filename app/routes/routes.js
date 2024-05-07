module.exports = app => {
  const persons = require("../controllers/person.js")

  var router = require("express").Router()

  router.get("/", persons.findAll)

  router.get("/:id", persons.findOne)

  app.use("/api/persons", router)
}
