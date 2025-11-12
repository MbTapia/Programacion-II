const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  const [r] = await pool.query('INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)', [nombre, precio, stock, categoria_id]);
  const [p] = await pool.query('SELECT * FROM productos WHERE id=?', [r.insertId]);
  res.json(p[0]);
});

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT p.*, c.nombre AS categoria_nombre FROM productos p JOIN categorias c ON p.categoria_id=c.id');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const [p] = await pool.query('SELECT p.*, c.nombre AS categoria_nombre FROM productos p JOIN categorias c ON p.categoria_id=c.id WHERE p.id=?', [id]);
  res.json(p[0]);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { nombre, precio, stock, categoria_id } = req.body;
  await pool.query('UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=? WHERE id=?', [nombre, precio, stock, categoria_id, id]);
  const [p] = await pool.query('SELECT * FROM productos WHERE id=?', [id]);
  res.json(p[0]);
});

router.patch('/:id/stock', async (req, res) => {
  const id = req.params.id;
  const { cantidad } = req.body;
  await pool.query('UPDATE productos SET stock = stock + ? WHERE id=?', [cantidad, id]);
  const [p] = await pool.query('SELECT * FROM productos WHERE id=?', [id]);
  res.json(p[0]);
});

module.exports = router;