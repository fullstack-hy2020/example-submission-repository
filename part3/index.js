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

app.get('/info', (request, response, next) => {
  Person.find({})
    .then(persons => {
      response.send(`<div>Phonebook has info for ${persons.length} people</div><p>${new Date()}</p>`)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      response.json(person)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons/', (request, response, next) => {
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

app.put('/api/persons/:id', (request, response, next) => {
  const name = request.body.name
  const number = request.body.number
  const person = {
    name: name,
    number: number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatePerson => {
      response.json(updatePerson)
    })
    .catch(error => next(error))
})


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

