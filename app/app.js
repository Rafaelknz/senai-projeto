const express = require('express')
const app = express()
const port = 8080
const path = require('path');
const db = require("../database")

// Middleware para habilitar o parsing de JSON no body
app.use(express.json());

// Serve the 'index.html' file from the root
app.get('/api-tester', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
  res.send('Funcionou essa p****!')
})


app.get('/tasks/:id', (req, res) => {
  parametro = req.params.id
  db.query(`SELECT * FROM tasks WHERE id = ${parametro}`, (err, rows) => {
    if (err) {
      console.log('Error: ' + err)
      return
    }
    res.send(rows)
  })
})

app.post('/', (req, res) => {
      console.log('Dados recebidos no body:', req.body);
      res.json({ message: 'Dados recebidos com sucesso!', body: req.body });
})

//Cole sua rota POST aqui

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})