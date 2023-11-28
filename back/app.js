const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  const responseData = { message: 'Données du back-end' };  
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});