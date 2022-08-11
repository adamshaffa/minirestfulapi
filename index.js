const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());

app.listen(PORT, (PORT, () => console.log(' hidup di http://localhost:${PORT}')));

app.get('/test', (req, res) => {
  res.status(200).send({
    status: 'ok',
  });
});

app.post('/test/:id', (req, res) => {
  const { id } = req.params;

  res.send({
    status: `status ok ${id}`,
  });
});
