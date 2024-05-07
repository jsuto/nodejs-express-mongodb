module.exports = person => {
  var schema = person.Schema(
    {
      name: String,
      age: Number
    },
    { collection: 'persons' }
  )

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Person = person.model("person", schema)

  return Person
}
