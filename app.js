const express = require('express');
const path = require('path');
const router = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});
