import express from 'express';

const PORT = 3001;

const persons = [
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

const app = express();
app.use(express.json());

app.get('/api/persons', (_req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log('ID!', id)
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
