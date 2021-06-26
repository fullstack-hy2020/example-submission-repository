const express = require('express')
var morgan = require('morgan')
const app = express()
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    name: "Arto Hellas",
    number: "040-1234561",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "r25323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`<div>Phonebook has info for ${persons.length} people</div><p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if(person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
  if(!request.body.name) {
    return response.status(422).json({
      error: "name key not specified"
    })
  }
  if(!request.body.number) {
    return response.status(422).json({
      error: "number key not specified"
    })
  }
  const name = request.body.name
  const number = request.body.number
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
  const person = {
    id: Math.floor(Math.random() * 1000000),
    name: name,
    number: number,
  }
  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

