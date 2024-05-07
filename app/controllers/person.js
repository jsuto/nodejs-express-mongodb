const db = require("../models")
const Person = db.persons

exports.findAll = (req, res) => {
  const name = req.query.name
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}

  Person.find(condition)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving persons."
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Person.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Person with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Person with id=" + id })
    })
}
