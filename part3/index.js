const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
morgan.token('body', (req, res) => JSON.stringify(req.body));
require('dotenv').config()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// original Model
const Person = require('./models/person')

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  response.send(`<div>Phonebook has info for ${persons.length} people</div><p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons/', (request, response) => {
  if (!request.body.name) {
    return response.status(422).json({
      error: "name key not specified"
    })
  }
  if (!request.body.number) {
    return response.status(422).json({
      error: "number key not specified"
    })
  }
  const name = request.body.name
  const number = request.body.number
  Person.find({}).then( persons => {
    if(persons.find(p => p.name === name)) {
      response.status(400).json({
        error: 'name must be unique'
      })
    }
    if(persons.find(p => p.number === number)) {
      response.status(400).json({
        error: 'number must be specified'
      })
    }
  })

  const person = new Person({
    name: name,
    number: number,
  })
  person.save().then(result => {
    console.log("saved")
  })

  response.json(person)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

