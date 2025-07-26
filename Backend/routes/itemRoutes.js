const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');

// POST /api/items/add
router.post('/add', async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = new Item({ name, description });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save item', error });
    }
});

// NEW: GET /api/items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch items', error });
    }
});

module.exports = router;
