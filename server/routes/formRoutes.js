const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Create a new form
router.post('/', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
