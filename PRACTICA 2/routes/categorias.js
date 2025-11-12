const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { nombre, descripcion } = req.body;
  const [r] = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
  const [cat] = await pool.query('SELECT * FROM categorias WHERE id = ?', [r.insertId]);
  res.json(cat[0]);
});

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM categorias');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const [cat] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
  const [prods] = await pool.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);
  res.json({ ...cat[0], productos: prods });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion } = req.body;
  await pool.query('UPDATE categorias SET nombre=?, descripcion=? WHERE id=?', [nombre, descripcion, id]);
  const [cat] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
  res.json(cat[0]);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await pool.query('DELETE FROM categorias WHERE id=?', [id]);
  res.json({ message: 'Categoria eliminada' });
});

module.exports = router;