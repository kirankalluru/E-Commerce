import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/monodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express();
const port = process.env.PORT || 4000;

// Connect to database and Cloudinary
connectDB();
connectCloudinary();  // ✅ Now properly executed

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});


//to kill any port we have to use below command
//npx kill-port 4000
