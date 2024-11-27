const express = require('express');
const app = express();

app.use(express.json());

// Sample data
let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];

// 1. GET /items - Get all items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// 2. POST /items - Add a new item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// 3. DELETE /items/:id - Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    items = items.filter(item => item.id !== id);
    res.status(200).json({ message: `Item ${id} deleted` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
