import express from 'express';
import connectDB from './config/db.js';
import products from './data/products.js';
import dotenv from 'dotenv';
import productRoutes from './productRoutes/productRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.get('/', (req, res) => {
    res.send('Back End API is running')
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server is running'));