const express = require('express');
const products = require('./data/products');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.send('Back End API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server is running'));