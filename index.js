import express from 'express';
import appRouter from './routes/route.js'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './database/database.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

//connect Database
connectDB()


app.use(express.json())
app.use(cors())
// Define a route for the api
app.use('/api', appRouter);



// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
