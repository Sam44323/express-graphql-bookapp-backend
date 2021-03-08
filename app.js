const express = require('express');

const app = express();

app.get('/', (req, res) => res.json('This is working!'));

app.listen(5000, () => {
  console.log('Server is listening!');
});
