const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel'); // adjust path as needed

router.post('/add', async (req, res) => {
    const { name, description } = req.body;
    console.log('Incoming body:', req.body);

    try {
        const newItem = new Item({ name, description });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save item', error });
    }
});

module.exports = router;
