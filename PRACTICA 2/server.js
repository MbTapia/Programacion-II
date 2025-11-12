const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriasRouter = require('./routes/categorias');
const productosRouter = require('./routes/productos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/categorias', categoriasRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => res.send({ message: 'API Practica 02 - Node.js + Express' }));

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));