const mongoose = require('mongoose')
const argSize = process.argv.length
if (argSize !== 3 && argSize !== 5) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack-saku-user:${password}@cluster0.damrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number
})

const Person = mongoose.model('Person', personSchema)


if (argSize === 3) {
  // get action
  console.log("phonebook:")
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  // post(create) action
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    id: Math.floor(Math.random() * 1000000)
  })

  person.save().then(result => {
    console.log("saved")
    mongoose.connection.close()
  })
}