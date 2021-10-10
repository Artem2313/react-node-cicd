const express = require('express');
const app = express();

app.get('/names', (req, res) => {
  res.send('Artem');
})

app.listen(5000, () => {
  console.log('Serever is running on 5000');
})
