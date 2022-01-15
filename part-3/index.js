import express from 'express';

const PORT = 3001;

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

const app = express();
app.use(express.json());

app.post('/api/persons', (req, res) => {
  if (!req.body.name) {
    return res.status(422).json({
      error: 'name missing',
    });
  }
  if (!req.body.number) {
    return res.status(422).json({
      error: 'number missing',
    });
  }
  const found = persons.find(
    (e) => e.name.toLowerCase() === req.body.name.toLowerCase()
  )
  if (found) {
    return res.status(422).json({
      error: 'name must be unique',
    });
  }

  const person = {
    id: generateId(),
    name: req.body.name,
    number: req.body.number,
  };
  persons.push(person);
  res.json(person);
});

app.get('/api/persons', (_req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((e) => e.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end('Person does not exist in phonebook');
  }
});

app.get('/info', (_req, res) => {
  res.send(
    `Phonebook has info for ${persons.length} people<br/><br/>${new Date()}`
  );
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((e) => e.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
