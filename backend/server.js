import express from 'express';
import connectDB from './config/db.js';
import products from './data/products.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

// Allow us to parse request to JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Back End API is running')
})

app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server is running'));