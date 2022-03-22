//import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/userModel.js';
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import user from "./data/users.js";
import products from "./data/products.js";


dotenv.config();

//we are connecting to database so we need to call the db here
connectDB();

const importData = async() => {   
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const users = await User.insertMany(user);

        //get the admin user's ID to be append in each products
        const adminUserID = users[0]._id;

        //get JSON of product with Admin's ID in each product
        const sampleProducts = products.map(product => {
            return {
                ...product,
                user: adminUserID
            }
        })

        await Product.insertMany(sampleProducts);

        console.log('Data Imported');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


const destroyData = async() => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log('Data Destroyed');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

//run the seeder function in npm script.
//in package.json we make a script to call destroyData & importData function
//process.argv[0] is the process.execPath which returns the absolute pathname of the executable that started the Node.js process
//process.argv[1] is the path of JS file being executed.
//process.argv[2 and so on] is the addition command line interface.
//in accessing destroyData() I make script in package.json "node backend/seeders -d";
//process.argv[0] = node, process.argv[1] = backend/seeders.js, process.argv[2] = -d
if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}