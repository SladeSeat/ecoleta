import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Mateus',
    'Davilis',
    'Rodrigo',
    'Felipe'
  ]);
});

app.listen(3333);